import { StyledContainer, StyledPopup, StyledClose, StyledTitleContainer, StyledTitle } from "./styles";
import { IPopup } from "./types";
import Close from '../../common/icons/close.svg';
import { Children, cloneElement, isValidElement } from "react";

const Popup = ({ trigger, children, title }: IPopup): JSX.Element => {
  return (
    <StyledPopup
      closeOnDocumentClick
      closeOnEscape
      modal
      trigger={trigger}
    >
      {(close: () => void): JSX.Element => (
        <StyledContainer>
          <StyledTitleContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledClose onClick={close}><Close /></StyledClose>
          </StyledTitleContainer>
          {Children.map(children, child => {
            if (isValidElement(child)) {
              return cloneElement(child, {close});
            }
            return child;
          })}
        </StyledContainer>
      )}
    </StyledPopup>
  );
};

export default Popup;
