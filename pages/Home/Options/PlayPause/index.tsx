import { StyledButton } from "./styles";
import { IPlayPause } from "./types";

const PlayPause = ({ onClick, pause }: IPlayPause): JSX.Element => <StyledButton pause={pause} onClick={onClick} />;

export default PlayPause;
