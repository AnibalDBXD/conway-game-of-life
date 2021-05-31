import { createContext, useContext } from 'react';
import { IGameState } from './types';

export const initialState: IGameState = {
  numberOfColumnsAndRows: 20,
  time: 200,
  isPause: true,
};

export const GameContext = createContext<IGameState>(initialState);

export const useGameContext = (): IGameState => useContext(GameContext);