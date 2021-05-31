import GameActions from './GameActions';
import { IGameState, IGameActions } from './types';

const MenuReducer = (state: IGameState, action: IGameActions): IGameState => {
  const { payload, type } = action;

  switch (type) {
  case GameActions.SET_PAUSE:
    return {
      ...state,
      isPause: payload as boolean
    };
  case GameActions.SET_TIME:
    return {
      ...state,
      time: payload as number
    };
  case GameActions.SET_COLUMNS_AND_ROWS:
    return {
      ...state,
      numberOfColumnsAndRows: payload as number
    };
  default:
    return state;
  }
};

export default MenuReducer;