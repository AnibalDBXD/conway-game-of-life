import Button from "../../../../components/Button";
import Popup from "../../../../components/Popup";

const Tips = (): JSX.Element => {
  return (
    <Popup trigger={<Button>Tips</Button>}>
      <p>Prueba</p>
    </Popup>
  );
};

export default Tips;
