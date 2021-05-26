import React, { useState } from 'react';
import Cell from './Cell';
import { StyledTableContainer } from './styles';
import { ICoordinates } from './types';
import { NumberOfCellsX, NumberOfCellsY, SearchActiveCellPredicate } from "./utils";

const Table = (): JSX.Element => {
  const DefaultRows = Array(NumberOfCellsX).fill({ Component: Cell, isActive: false });

  const Columns = Array(NumberOfCellsY).fill(DefaultRows);

  const [ActiveCells, setActiveCells] = useState <ICoordinates[]>([]);

  const SearchActiveCell = ({ X: currentX, Y: currentY }: ICoordinates): boolean =>
    ActiveCells.some(({ X: activeX, Y: activeY }) =>
      SearchActiveCellPredicate({ activeX, activeY, currentY, currentX }));

  const handleCellClick = ({ X, Y }: ICoordinates): void => {
    if (SearchActiveCell({ X, Y })) {
      const currentActiveCells = [...ActiveCells];
      const ActiveCellIndex = currentActiveCells.findIndex(({ X: activeX, Y: activeY }) =>
        SearchActiveCellPredicate({ activeX, activeY, currentY: Y, currentX: X }));
      currentActiveCells.splice(ActiveCellIndex, 1);
      setActiveCells(currentActiveCells);
    } else {
      setActiveCells([...ActiveCells, {X, Y}]);
    }
  };

  return (
    <StyledTableContainer hideScrollbars={false} component="main">
      <table>
        <tbody>
          {Columns.map((Colunm, columnI) => (
            <tr key={columnI}>
              {Colunm.map(({Component: Row}, rowI: number) => (
                <Row isActive={SearchActiveCell({ X: rowI, Y: columnI})} onClick={(): void => handleCellClick({ X: rowI, Y: columnI})} key={rowI} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  );
};

export default Table;
