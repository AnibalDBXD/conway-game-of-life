import { ReactNode, useReducer } from "react";
import GameActions from "./GameActions";
import { initialState, GameContext } from "./GameContext";
import GameReducer from "./GameReducer";

interface IProps {
    children: ReactNode;
}

const GameProvider = ({ children }: IProps): JSX.Element => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  const setPause = (pause: boolean): void => {
    dispatch({ payload: pause, type: GameActions.SET_PAUSE});
  };

  const setColumnsAndRows = (columnsAndRows: number): void => {
    dispatch({ payload: columnsAndRows, type: GameActions.SET_COLUMNS_AND_ROWS});
  };

  const setTime = (time: number): void => {
    dispatch({ payload: time, type: GameActions.SET_TIME});
  };

  const setCustomGame = (newCustomGame: boolean[][]): void => {
    dispatch({ payload: newCustomGame, type: GameActions.SET_CUSTOM_GAME});
  };

  const reset = (): void => {
    dispatch({ payload: null, type: GameActions.RESET});
  };

  return (
    <GameContext.Provider
      value={{
        isPause: state.isPause,
        setPause,
        numberOfColumnsAndRows: state.numberOfColumnsAndRows,
        setColumnsAndRows,
        time: state.time,
        setTime,
        setCustomGame,
        customGame: state.customGame,
        reset
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;