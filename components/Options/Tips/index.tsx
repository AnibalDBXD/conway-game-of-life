import Button from '../../Button';
import Popup from '../../Popup';
import { StyledSmallTip } from './styles';
import TipList from './TipList';

const Tips = (): JSX.Element => {
  return (
    <Popup title="Tips" trigger={<Button>Tips</Button>}>
      <TipList />
      <StyledSmallTip>
        You can pause the game by pressing the space bar!
      </StyledSmallTip>
    </Popup>
  );
};

export default Tips;
