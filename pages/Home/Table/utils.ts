import { IChangeCells, ICells } from "./types";

export const NumberOfCellsX = 40; // Variable
export const NumberOfCellsY = 30; // Variable
export const CellSize = 25;

export const createCell = ({ X, Y, Cells }: IChangeCells): ICells => {
  const newCells = [...Cells];
  newCells[Y][X] = true;
  return newCells;
};


// export const SearchActiveCellPredicate = ({ activeX, activeY, currentX, currentY}: ISearchActiveCellPredicate): boolean => activeX === currentX && activeY === currentY;

// export const getNeighbour = ({ X, Y }: ICoordinates): ICoordinates[] => {
//   return [
//     //Left Neighnour
//     {X: X-1, Y: Y},
//     //Right Neighnour
//     {X: X+1, Y: Y},
//     //Downstairs Neighnour
//     {X: X, Y: Y-1},
//     //Upstairs Neighbor
//     {X: X, Y: Y+1},
//     //Neighbor below and left
//     {X: X-1, Y: Y-1},
//     //Upstairs neighbor and left
//     {X: X-1, Y: Y+1},
//     //Upstairs neighbor and right
//     {X: X+1, Y: Y+1},
//     //Neighbor below and right
//     {X: X+1, Y: Y-1},
//   ];
// };

// export const searchActiveCell = ({ X: currentX, Y: currentY, activeCells}: IChangeCells): boolean =>
//   activeCells.some(({ X: activeX, Y: activeY }) =>
//     SearchActiveCellPredicate({ activeX, activeY, currentY, currentX }));

// export const deleteCell = ({ X, Y, activeCells }: IChangeCells): ICoordinates[] => {
//   const currentActiveCells = [...activeCells];

//   const ActiveCellIndex = currentActiveCells.findIndex(({ X: activeX, Y: activeY }) =>
//     SearchActiveCellPredicate({ activeX, activeY, currentY: Y, currentX: X }));

//   currentActiveCells.splice(ActiveCellIndex, 1);
//   return currentActiveCells;
// };
