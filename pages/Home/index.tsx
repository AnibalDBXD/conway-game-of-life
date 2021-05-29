import { useState } from "react";
import Table from "./Table";
import Options from "./Options";
import { StyledHome } from "./styles";

const Home = (): JSX.Element => {
  const [numberOfColumnsAndRows, setNumberOfColumnsAndRows] = useState(10);
  const [time, setTime] = useState(200);
  const [isPause, setPause] = useState(true);

  return (
    <StyledHome>
      <Table isPause={isPause} numberOfColumnsAndRows={numberOfColumnsAndRows} time={time} />
      <Options
        setTime={(time: number): void => setTime(time)}
        setNumberOfColumnsAndRows={(number: number): void => setNumberOfColumnsAndRows(number)}
        isPause={isPause}
        setPause={(value: boolean): void => setPause(value)} />
    </StyledHome>
  );
};

export default Home;
