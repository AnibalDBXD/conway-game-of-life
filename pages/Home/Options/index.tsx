import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IOptions } from "./types";
import { StyledForm, StyledOptions, StyledTipsAndRulesContainer, StyledCenterInput } from "./styles";
import PlayPause from "../../../components/PlayPause";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Tips from "./Tips";
import Rules from "./Rules";

const MAX_TIME = 10000;
const MIN_TIME = 100;
const DEFAULT_TIME = 200;

const MIN_COLUMUNS_AND_ROWS = 8;
const MAX_COLUMUNS_AND_ROWS = 1000;
const DEFAULT_COLUMUNS_AND_ROWS = 16;

const Options = ({ setPause, isPause, setNumberOfColumnsAndRows, setTime }: IOptions): JSX.Element => {
  const [currentTime, setCurrentTime] = useState<string | number>(DEFAULT_TIME);
  const [currentColumnsAndRows, setCurrentColumnsAndRows] = useState<string | number>(DEFAULT_COLUMUNS_AND_ROWS);

  const onChangeTime = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const currentTime = Number(event.target.value);
    if (currentTime > MAX_TIME) {
      setCurrentTime(MAX_TIME);
      return;
    }
    setCurrentTime(currentTime);
  };

  const onChangeColumnsAndRows = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setCurrentColumnsAndRows((Number(event.target.value)));
  };

  const handleSubmit = (event?: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>): void => {
    event?.preventDefault();
    if (currentTime !== "" || Number(currentTime) !== DEFAULT_TIME) {
      setTime(Number(currentTime));
    }
    if (currentColumnsAndRows !== "" || Number(currentColumnsAndRows) !== DEFAULT_COLUMUNS_AND_ROWS) {
      setNumberOfColumnsAndRows(Number(currentColumnsAndRows));
    }
  };

  const onPause = (event: KeyboardEvent): void => {
    if (event.key === " ") {
      handlePause();
    }
  };

  const handlePause = (): void => {
    setPause(!isPause);
  };

  useEffect(() => {
    document.addEventListener("keydown", onPause);
    return (): void => document.removeEventListener("keydown", onPause);
  }, [isPause]);

  return (
    <StyledOptions>
      <StyledForm>
        <StyledCenterInput>
          <Input
            label="Time (miliseconds)"
            disabled={!isPause}
            value={currentTime}
            onChange={onChangeTime}
            min={MIN_TIME} max={MAX_TIME} />
        </StyledCenterInput>
        <PlayPause pause={isPause} onClick={(): void => handlePause()} />
        <StyledCenterInput>
          <Input
            label="Columns and Rows"
            value={currentColumnsAndRows}
            disabled={!isPause}
            onChange={onChangeColumnsAndRows}
            min={MIN_COLUMUNS_AND_ROWS} max={MAX_COLUMUNS_AND_ROWS} />
        </StyledCenterInput>
      </StyledForm>
      <StyledTipsAndRulesContainer>
        <Tips />
        <Button onClick={handleSubmit}>Apply changes</Button>
        <Rules />
      </StyledTipsAndRulesContainer>
    </StyledOptions>
  );
};

export default Options;
