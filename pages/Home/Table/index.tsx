import React, { useState } from 'react';
import Cell from "./Cell";
import { StyledTableContainer } from './styles';
import { ITable } from './types';
import { createCell } from './utils';

const Table = ({ numberofColumns, numberofRows }: ITable): JSX.Element => {
  const [Columns, setColumns] = useState<boolean[][]>((
    new Array(numberofColumns)).fill(false)
    .map(() => new Array(numberofRows).fill(false)));

  const handleCellClick = (X: number, Y: number): void => {
    setColumns(createCell({ X, Y, Cells: Columns}));
  };

  return (
    <StyledTableContainer hideScrollbars={false} component="main">
      <table>
        <tbody>
          {Columns.map((Rows, Y) => (
            <tr key={Y}>
              {Rows.map((isLive, X) => (
                <Cell isActive={isLive} onClick={(): void => handleCellClick(X, Y)} key={String(X)+String(Y)} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  );
};

export default Table;
