import { ChangeEvent, FormEvent, useRef, useEffect } from "react";
import { IOptions } from "./types";

const Options = ({ setPause, pause, setNumberOfColumnsAndRows, setTime }: IOptions): JSX.Element => {
  let newTime = null;
  let newColumnsAndRows = null;

  const timeRef = useRef<HTMLInputElement>(null);
  const columnsAndRowsRef = useRef<HTMLInputElement>(null);

  const onChangeTime = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    newTime = (Number(event.target.value));
  };

  const onChangeColumnsAndRows = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    newColumnsAndRows = ((Number(event.target.value)));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (newTime) {
      setTime(newTime);
      timeRef.current.value = "";
    }
    if (newColumnsAndRows) {
      setNumberOfColumnsAndRows(newColumnsAndRows);
      columnsAndRowsRef.current.value = "";
    }
  };

  const onPause = (event: KeyboardEvent): void => {
    if (event.key === " ") {
      setPause(!pause);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onPause);
    return (): void => document.removeEventListener("keydown", onPause);
  }, [pause]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={(): void => setPause(!pause)}>Pause</button>
        <input ref={timeRef} placeholder="time" disabled={!pause} onChange={onChangeTime} />
        <input
          ref={columnsAndRowsRef}
          placeholder="set number of columns and rows"
          disabled={!pause}
          onChange={onChangeColumnsAndRows} />
        <button onSubmit={handleSubmit}>Apply</button>
      </form>
    </>
  );
};

export default Options;
