import { createContext, useContext } from 'react';
import { IGameState } from './types';
import { DEFAULT_VALUES } from './utilts';

export const initialState: IGameState = {
  numberOfColumnsAndRows: DEFAULT_VALUES.COLUMUNS_AND_ROWS,
  time: DEFAULT_VALUES.TIME,
  isPause: true,
};

export const GameContext = createContext<IGameState>(initialState);

export const useGameContext = (): IGameState => useContext(GameContext);