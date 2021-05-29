import styled from "styled-components";
import { COLORS } from "../../../../common/styles";
import { ICellProps } from "./types";

export const cellSize = 25;

export const StyledCell = styled.td<ICellProps>`
    background-color: ${(props): string => props.isActive ? COLORS.WHITE : COLORS.MINE_SHAFT};
    min-width: ${cellSize | 25}px;
    height: ${cellSize | 25}px;
    cursor: pointer;
`;