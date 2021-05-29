import { useState } from "react";
import Table from "./Table";
import Options from "./Options";

const Home = (): JSX.Element => {
  const [numberOfColumnsAndRows, setNumberOfColumnsAndRows] = useState(10);
  const [time, setTime] = useState(200);
  const [pause, setPause] = useState(true);

  return (
    <>
      <Table pause={pause} numberOfColumnsAndRows={numberOfColumnsAndRows} time={time} />
      <Options
        setTime={(time: number): void => setTime(time)}
        setNumberOfColumnsAndRows={(number: number): void => setNumberOfColumnsAndRows(number)}
        pause={pause}
        setPause={(value: boolean): void => setPause(value)} />
    </>
  );
};

export default Home;
