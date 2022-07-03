import { createContext, useContext } from 'react';
import { IGameState } from './types';
import { DEFAULT_VALUES } from './utils';

export const initialState: IGameState = {
  numberOfColumnsAndRows: DEFAULT_VALUES.COLUMUNS_AND_ROWS,
  time: DEFAULT_VALUES.TIME,
  isPause: true,
  customGame: null,
};

export const GameContext = createContext<IGameState>(initialState);

export const useGameContext = (): IGameState => useContext(GameContext);
