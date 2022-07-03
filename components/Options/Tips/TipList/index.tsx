import { StyledPatternType, StyledTips } from './styles';
import Pattern from './Pattern';
import {
  boatPattern,
  gliderPattern,
  RpentominoPattern,
  spaceShipPattern,
  squarePattern,
} from './utils';

const TipList = ({ close }: { close?: () => void }): JSX.Element => {
  return (
    <StyledTips>
      <li>
        <StyledPatternType>Estables</StyledPatternType>
        <Pattern
          name="Square"
          close={close}
          pattern={squarePattern()}
          src="/img/square.png"
        />
        <Pattern
          name="Boat"
          close={close}
          pattern={boatPattern()}
          src="/img/boat.png"
        />
      </li>
      <li>
        <StyledPatternType>Movement</StyledPatternType>
        <Pattern
          name="Glider"
          close={close}
          pattern={gliderPattern()}
          src="/img/glider.png"
        />
        <Pattern
          name="Lightweight space ship"
          close={close}
          pattern={spaceShipPattern()}
          src="/img/space_ship.png"
        />
      </li>
      <li>
        <StyledPatternType>Methuselahs</StyledPatternType>
        <Pattern
          name="R pentomino"
          close={close}
          pattern={RpentominoPattern()}
          src="/img/r_pentomino.png"
        />
      </li>
    </StyledTips>
  );
};

export default TipList;
