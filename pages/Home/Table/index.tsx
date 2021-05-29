import React, { useEffect, useState } from 'react';
import Cell from "./Cell";
import { StyledTableContainer } from './styles';
import { ICoordinates, ITable } from './types';
import { createCell, createColumnsAndRows, deleteCell, getNeighbours } from './utils';

const Table = ({ numberOfColumnsAndRows, time, pause }: ITable): JSX.Element => {
  const [Rows, setRows] = useState<boolean[][]>(createColumnsAndRows(numberOfColumnsAndRows));

  const handleCellClick = (X: number, Y: number): void => {
    const cellData = { X, Y, Cells: Rows };
    const cell = Rows[Y][X];
    if (cell) {
      setRows(deleteCell(cellData));
    } else {
      setRows(createCell(cellData));
    }
  };

  const startGame = (): NodeJS.Timeout => (
    setInterval(() => {
      let gameState = [...Rows];

      const CellsToCreate: ICoordinates[] = [];
      const CellsToDelete: ICoordinates[] = [];

      Rows.forEach((columns, Y) => {
        columns.forEach((cell, X) => {
          const cellData = { X, Y, Cells: Rows };
          const neighbours = getNeighbours(cellData);
          const activeNeighbours = neighbours.filter((value) => value).length;

          if (!cell) {
            if (activeNeighbours === 3) {
              CellsToCreate.push({ X, Y });
            }
          } else {
            if (activeNeighbours < 2 || activeNeighbours > 3) {
              CellsToDelete.push({ X, Y });
            }
          }
        });
      });


      CellsToCreate.forEach(({ X, Y }) => {
        gameState = createCell({ X, Y, Cells: gameState});
      });
      CellsToDelete.forEach(({ X, Y }) => {
        gameState = deleteCell({ X, Y, Cells: gameState});
      });
      setRows(gameState);
    }, time)
  );

  useEffect(() => {
    if (!pause) {
      const interval = startGame();
      return (): void => clearInterval(interval);
    }
  }, [pause]);

  useEffect(() => {
    const oldRows = [...Rows];
    const newRows = createColumnsAndRows(numberOfColumnsAndRows);
    if (newRows.length > oldRows.length) {
      oldRows.forEach((column, Y) => {
        column.forEach((cell, X) => {
          newRows[Y][X] = cell;
        }
        );
      });
    }
    setRows(newRows);
  }, [numberOfColumnsAndRows]);

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
