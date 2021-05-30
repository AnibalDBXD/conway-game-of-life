import { StyledContainer, StyledPopup, StyledClose, StyledTitleContainer, StyledTitle } from "./styles";
import { IPopup } from "./types";
import Close from '../../common/icons/close.svg';

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
          {children}
        </StyledContainer>
      )}
    </StyledPopup>
  );
};

export default Popup;
