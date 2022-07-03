import { createColumnsAndRows } from '../../components/Table/utils';
import GameActions from './GameActions';
import { initialState } from './GameContext';
import { IGameState, IGameActions } from './types';
import { DEFAULT_VALUES } from './utils';

const MenuReducer = (state: IGameState, action: IGameActions): IGameState => {
  const { payload, type } = action;

  switch (type) {
  case GameActions.SET_PAUSE:
    return {
      ...state,
      isPause: payload as boolean,
    };
  case GameActions.SET_TIME:
    return {
      ...state,
      time: payload as number,
    };
  case GameActions.SET_COLUMNS_AND_ROWS:
    return {
      ...state,
      numberOfColumnsAndRows: payload as number,
    };
  case GameActions.RESET:
    return {
      ...initialState,
      customGame: createColumnsAndRows(DEFAULT_VALUES.COLUMUNS_AND_ROWS),
    };
  case GameActions.SET_CUSTOM_GAME:
    return {
      ...state,
      customGame: payload as boolean[][],
    };
  default:
    return state;
  }
};

export default MenuReducer;
