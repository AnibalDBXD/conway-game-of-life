import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { COLORS } from '../../common/styles';

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledContainer = styled.section`
  overflow: auto;
  background-color: ${COLORS.WHITE};
  border-radius: 16px;
  width: 50vw;
  max-height: 90vh;
  padding: 16px;
  box-shadow: 2px 13px 23px -3px rgba(0, 0, 0, 0.79);
  animation: 0.5s ease-out slideInFromTop forwards;

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-weight: bold;
`;

export const StyledClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;
  right: -10px;
  top: -10px;
  position: absolute;
  background: 0;
  border: 0;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
