import Popup from "reactjs-popup";
import styled from "styled-components";
import { COLORS } from "../../common/styles";

export const StyledPopup = styled(Popup)`
    &-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const StyledContainer = styled.section`
    background-color: ${COLORS.WHITE};
    border-radius: 16px;
    width: 50vw;
    height: 80vh;
    padding: 16px;
    box-shadow: 2px 13px 23px -3px rgba(0,0,0,0.79);

    animation: .5s ease-out slideInFromTop forwards;

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
`;

export const StyledClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: 0;
  border: 0;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin-left: auto;
  margin-right: -10px;
  margin-top: -10px;
`;