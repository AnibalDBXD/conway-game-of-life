import styled from "styled-components";
import { COLORS } from "../../../../common/styles";
import { CellSize } from "../utils";
import { ICellProps } from "./types";

export const StyledCell = styled.td<ICellProps>`
    background-color: ${(props): string => props.isActive ? COLORS.WHITE : COLORS.BLACK};
    min-width: ${CellSize}px;
    height: ${CellSize}px;
    cursor: pointer;
`;