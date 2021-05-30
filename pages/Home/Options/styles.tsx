import styled from "styled-components";
import { COLORS } from "../../../common/styles";

export const StyledOptions = styled.div`
    background: linear-gradient(180deg, ${COLORS.NIGHT_RIDER} 7%, ${COLORS.MINE_SHAFT} 19%);
    height: 20vh;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`;

export const StyledForm = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const StyledCenterInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledTipsAndRulesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
