import React, { useState, useEffect } from 'react';
import { StyledTableContainer } from './styles';
import { ICoordinates } from './types';
import {  createCell, deleteCell, Columns, getNeighbour, searchActiveCell } from "./utils";

const TIME = 1000;

const Table = (): JSX.Element => {
  const [ActiveCells, setActiveCells] = useState <ICoordinates[]>([]);

  const handleCellClick = ({ X, Y }: ICoordinates): void => {
    if (searchActiveCell({ X, Y, activeCells:  ActiveCells})) {
      setActiveCells(deleteCell({ X, Y, activeCells: ActiveCells }));
    } else {
      setActiveCells(createCell({ X, Y, activeCells: ActiveCells }));
    }
  };

  const startGame = (activeCells: ICoordinates[]): NodeJS.Timeout => {
    return setInterval(() => {
      //Calculate the neighbour
      activeCells.forEach(({ X, Y }) => {
        const neighbour = getNeighbour({ X, Y });

        const activeNeighbour = neighbour.filter(({ X, Y }) => (
          searchActiveCell({ X, Y, activeCells: ActiveCells})
        ));

        // eslint-disable-next-line no-console
        console.log(activeNeighbour);
      });
    }, TIME);
  };

  useEffect(() => {
    const interval = startGame(ActiveCells);

    return (): void => clearInterval(interval);
  }, [ActiveCells]);

  return (
    <StyledTableContainer hideScrollbars={false} component="main">
      <table>
        <tbody>
          {Columns.map((Colunm, columnI) => (
            <tr key={columnI}>
              {Colunm.map(({Component: Row}, rowI: number) => (
                <Row isActive={searchActiveCell({ X: rowI, Y: columnI,activeCells: ActiveCells})} onClick={(): void => handleCellClick({ X: rowI, Y: columnI})} key={rowI} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  );
};

export default Table;
