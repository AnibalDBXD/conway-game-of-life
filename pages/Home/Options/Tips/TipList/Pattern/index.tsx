import { useGameContext } from "../../../../../../context/Game/GameContext";
import { IMAGE_SIZE } from "../../../utils";
import { StyledPattern, StyledImage } from "./styles";
import { IPattern } from "./types";

const Pattern = ({ name, src, pattern, close }: IPattern): JSX.Element => {
  const { setCustomGame } = useGameContext();

  const handleClick = (): void => {
    setCustomGame(pattern);
    close();
  };

  return (
    <StyledPattern>
      <h3>{name}</h3>
      <StyledImage onClick={handleClick} src={src} alt={`${name} figure`} width={IMAGE_SIZE} height={IMAGE_SIZE} />
    </StyledPattern>
  );
};

export default Pattern;
