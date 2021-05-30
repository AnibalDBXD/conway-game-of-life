import { StyledContainer, StyledPopup, StyledClose } from "./styles";
import { IPopup } from "./types";
import Close from '../../common/icons/close.svg';

const Popup = ({ trigger, children }: IPopup): JSX.Element => {
  return (
    <StyledPopup
      closeOnDocumentClick
      closeOnEscape
      modal
      trigger={trigger}
    >
      {(close: () => void): JSX.Element => (
        <StyledContainer>
          <StyledClose onClick={close}><Close /></StyledClose>
          {children}
        </StyledContainer>
      )}
    </StyledPopup>
  );
};

export default Popup;
