import GameActions from "./GameActions";

export interface IGameState {
    numberOfColumnsAndRows: number;
    time: number;
    isPause: boolean;
    setPause?: (pause: boolean) => void;
    setColumnsAndRows?: (columnsAndRows: number) => void;
    setTime?: (time: number) => void;
    reset?: () => void;
    customGame: boolean[][] | null;
    setCustomGame?: (newCustomGame: boolean[][] | null) => void;
}

export interface IGameActions {
    type: GameActions;
    payload: number | boolean | boolean[][];
  }