import { ISearchActiveCellPredicate } from "./types";

export const NumberOfCellsX = 40; // Variable
export const NumberOfCellsY = 30; // Variable
export const CellSize = 25;

export const SearchActiveCellPredicate = ({ activeX, activeY, currentX, currentY}: ISearchActiveCellPredicate): boolean => activeX === currentX && activeY === currentY;

