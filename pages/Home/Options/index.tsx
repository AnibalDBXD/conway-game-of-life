import React, { ChangeEvent, FormEvent, useRef, useEffect } from "react";
import { IOptions } from "./types";
import { StyledForm, StyledOptions, StyledTipsAndRulesContainer } from "./styles";
import PlayPause from "./PlayPause";

const Options = ({ setPause, isPause, setNumberOfColumnsAndRows, setTime }: IOptions): JSX.Element => {
  let newTime = null;
  const MAX_TIME = 10000;
  const MIN_TIME = 100;
  const DEFAULT_TIME = 200;

  let newColumnsAndRows = null;

  const timeRef = useRef<HTMLInputElement>(null);
  const columnsAndRowsRef = useRef<HTMLInputElement>(null);

  const onChangeTime = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const currentTime = Number(event.target.value);
    if (currentTime > MAX_TIME) {
      timeRef.current.value = MAX_TIME + "";
      return;
    }
    if (currentTime < MIN_TIME) {
      newTime = MIN_TIME;
      return;
    }
    newTime = (currentTime);
  };

  const onChangeColumnsAndRows = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    newColumnsAndRows = ((Number(event.target.value)));
  };

  const handleSubmit = (event?: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>): void => {
    event?.preventDefault();
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
      setPause(!isPause);
    }
  };

  const handlePause = (): void => {
    setPause(!isPause);
    handleSubmit();
  };

  useEffect(() => {
    document.addEventListener("keydown", onPause);
    return (): void => document.removeEventListener("keydown", onPause);
  }, [isPause]);

  return (
    <StyledOptions>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <input type="number" ref={timeRef} placeholder="Time in miliseconds" readOnly={!isPause} onChange={onChangeTime} defaultValue={DEFAULT_TIME} min={MIN_TIME} max={MAX_TIME} />
        </div>
        <PlayPause pause={isPause} onClick={(): void => handlePause()} />
        <input
          ref={columnsAndRowsRef}
          placeholder="set number of columns and rows"
          disabled={!isPause}
          onChange={onChangeColumnsAndRows} />
      </StyledForm>
      <StyledTipsAndRulesContainer>
        <button>Tips</button>
        <button>Rules</button>
      </StyledTipsAndRulesContainer>
    </StyledOptions>
  );
};

export default Options;
