import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { StyledForm, StyledOptions, StyledTipsAndRulesContainer, StyledCenterInput } from "./styles";
import PlayPause from "../../../components/PlayPause";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Tips from "./Tips";
import Rules from "./Rules";
import { useGameContext } from "../../../context/Game/GameContext";
import { DEFAULT_VALUES, MAX_VALUES, MIN_VALUES } from "../../../context/Game/utilts";

const Options = (): JSX.Element => {
  const {
    isPause,
    setTime,
    setColumnsAndRows,
    setPause,
    reset
  } = useGameContext();

  const [currentTime, setCurrentTime] = useState<number>(DEFAULT_VALUES.TIME);
  const [currentColumnsAndRows, setCurrentColumnsAndRows] = useState<number>(DEFAULT_VALUES.COLUMUNS_AND_ROWS);

  const onChangeTime = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setCurrentTime(Number(event.target.value));
  };

  const onChangeColumnsAndRows = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setCurrentColumnsAndRows((Number(event.target.value)));
  };

  const handleSubmit = (event?: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>): void => {
    event?.preventDefault();
    setTime(currentTime);
    setColumnsAndRows(currentColumnsAndRows);
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
            min={MIN_VALUES.TIME} max={MAX_VALUES.TIME} />
        </StyledCenterInput>
        <PlayPause pause={isPause} onClick={(): void => handlePause()} />
        <StyledCenterInput>
          <Input
            label="Columns and Rows"
            value={currentColumnsAndRows}
            disabled={!isPause}
            onChange={onChangeColumnsAndRows}
            min={MIN_VALUES.COLUMUNS_AND_ROWS} max={MAX_VALUES.COLUMUNS_AND_ROWS} />
        </StyledCenterInput>
      </StyledForm>
      <StyledTipsAndRulesContainer>
        <Tips />
        <Button onClick={handleSubmit}>Apply changes</Button>
        <Button onClick={reset}>Reset</Button>
        <Rules />
      </StyledTipsAndRulesContainer>
    </StyledOptions>
  );
};

export default Options;
