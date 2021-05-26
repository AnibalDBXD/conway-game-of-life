import Cell from "./Cell";
import { ISearchActiveCellPredicate } from "./types";

export const NumberOfCellsX = 40; // Variable
export const NumberOfCellsY = 30; // Variable
export const CellSize = 25;

export const SearchActiveCellPredicate = ({ activeX, activeY, currentX, currentY}: ISearchActiveCellPredicate): boolean => activeX === currentX && activeY === currentY;

export const Rows = Array(NumberOfCellsX).fill({ Component: Cell, isActive: false });

export const Columns = Array(NumberOfCellsY).fill(Rows);