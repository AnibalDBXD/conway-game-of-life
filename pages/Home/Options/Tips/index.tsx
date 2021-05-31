import Button from "../../../../components/Button";
import Popup from "../../../../components/Popup";
import { StyledTips, StyledPatternType, StyledSmallTip } from "./styles";
import Pattern from "./Pattern";

const Tips = (): JSX.Element => {
  return (
    <Popup title="Tips" trigger={<Button>Tips</Button>}>
      <StyledTips>
        <li>
          <StyledPatternType>Estables</StyledPatternType>
          <Pattern name="Square" src="/img/square.png"  />
          <Pattern name="Boat" src="/img/boat.png"  />
        </li>
        <li>
          <StyledPatternType>Movement</StyledPatternType>
          <Pattern name="Glider " src="/img/glider.png"  />
          <Pattern name="Lightweight space ship" src="/img/space_ship.png"  />
        </li>
        <li>
          <StyledPatternType>Methuselahs</StyledPatternType>
          <Pattern name="R pentomino " src="/img/r_pentomino.png"  />
        </li>
      </StyledTips>
      <StyledSmallTip>You can pause the game by pressing the space bar!</StyledSmallTip>
    </Popup>
  );
};

export default Tips;
