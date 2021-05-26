import { ICellProps } from "./Cell/types";
import Cell from "./Cell";

export interface ICoordinates {
    X: number;
    Y: number;
}

export interface ICell extends ICellProps {
    Component: typeof Cell
}

export interface ISearchActiveCellPredicate {
    activeX: number;
    activeY: number;
    currentX: number;
    currentY: number;
}