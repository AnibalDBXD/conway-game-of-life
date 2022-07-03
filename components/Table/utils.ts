import { IChangeCells, ICells } from './types';

export const createCell = ({ X, Y, Cells }: IChangeCells): ICells => {
  const newCells = [...Cells];
  newCells[Y][X] = true;
  return newCells;
};

export const deleteCell = ({ X, Y, Cells }: IChangeCells): ICells => {
  const newCells = [...Cells];
  newCells[Y][X] = false;
  return newCells;
};

export const getNeighbours = ({ X, Y, Cells }: IChangeCells): boolean[] => {
  const getCell = (cellX: number, cellY: number): boolean => {
    let rows: boolean[];
    if (cellY >= 0) {
      rows = Cells[cellY % Cells.length];
    } else {
      rows = Cells[Cells.length - 1];
    }
    let cell: boolean;
    if (cellX >= 0) {
      cell = rows[cellX % rows.length];
    } else {
      cell = rows[rows.length - 1];
    }
    return cell;
  };
  const upstairsNeighbor = getCell(X, Y - 1);
  const downstairsNeighnour = getCell(X, Y + 1);
  const leftNeighnour = getCell(X - 1, Y);
  const rightNeighnour = getCell(X + 1, Y);
  const upstairsNeighborAndLeft = getCell(X - 1, Y - 1);
  const upstairsNeighborAndRight = getCell(X + 1, Y - 1);
  const neighborBelowAndRight = getCell(X + 1, Y + 1);
  const neighborBelowAndLeft = getCell(X - 1, Y + 1);

  return [
    upstairsNeighbor,
    downstairsNeighnour,
    leftNeighnour,
    rightNeighnour,
    upstairsNeighborAndLeft,
    upstairsNeighborAndRight,
    neighborBelowAndRight,
    neighborBelowAndLeft,
  ];
};

export const createColumnsAndRows = (newColumnsAndRows: number): boolean[][] =>
  new Array(newColumnsAndRows)
    .fill(false)
    .map(() => new Array(newColumnsAndRows).fill(false));
