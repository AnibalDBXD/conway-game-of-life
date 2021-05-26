import styled from "styled-components";
import { COLORS } from "../../../../common/styles";
import { ICellProps } from "./types";

export const CellSize = 25;

export const StyledCell = styled.td<ICellProps>`
    background-color: ${(props): string => props.isActive ? COLORS.WHITE : COLORS.BLACK};
    min-width: ${CellSize | 25}px;
    height: ${CellSize | 25}px;
    cursor: pointer;
`;