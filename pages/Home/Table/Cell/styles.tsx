import styled from "styled-components";
import { COLORS } from "../../../../common/styles";
import { CellSize } from "../utils";

export const StyledCell = styled.td`
    background-color: ${COLORS.BLACK};
    width: ${CellSize}px;
    height: ${CellSize}px;
`;