import React, { useEffect, useState } from 'react';
import Cell from "./Cell";
import { StyledTableContainer } from './styles';
import { ITable } from './types';
import { createCell, deleteCell, getNeighbour } from './utils';

const Table = ({ numberofColumns, numberofRows }: ITable): JSX.Element => {
  const [Rows, setRows] = useState<boolean[][]>((
    new Array(numberofColumns)).fill(false)
    .map(() => new Array(numberofRows).fill(false)));

  const handleCellClick = (X: number, Y: number): void => {
    const cellData = { X, Y, Cells: Rows };
    const cell = Rows[Y][X];
    if (cell) {
      setRows(deleteCell(cellData));
    } else {
      setRows(createCell(cellData));
    }
    const neighbour = getNeighbour(cellData);
  };

  return (
    <StyledTableContainer hideScrollbars={false} component="main">
      <table>
        <tbody>
          {Rows.map((cells, Y) => (
            <tr key={Y}>
              {cells.map((isLive, X) => (
                <Cell isActive={isLive} onClick={(): void => handleCellClick(X, Y)} key={String(Y)+String(X)} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  );
};

export default Table;
