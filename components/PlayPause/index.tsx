import { StyledButton } from "./styles";
import { IPlayPause } from "./types";

const PlayPause = ({ onClick, pause }: IPlayPause): JSX.Element => <StyledButton data-testid="PlayPauseButton" pause={pause} onClick={onClick} />;

export default PlayPause;
