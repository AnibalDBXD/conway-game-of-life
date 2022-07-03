import { DEFAULT_VALUES } from '../../../../context/Game/utils';
import { createColumnsAndRows } from '../../../Table/utils';

export const squarePattern = (): boolean[][] => {
  const newGame = createColumnsAndRows(DEFAULT_VALUES.COLUMUNS_AND_ROWS);
  const Y = Math.round(newGame.length / 2);
  const X = Math.round(newGame[Y].length / 2);

  newGame[Y][X] = true;
  newGame[Y + 1][X] = true;
  newGame[Y][X + 1] = true;
  newGame[Y + 1][X + 1] = true;
  return newGame;
};

export const boatPattern = (): boolean[][] => {
  const newGame = createColumnsAndRows(DEFAULT_VALUES.COLUMUNS_AND_ROWS);
  const Y = Math.round(newGame.length / 2);
  const X = Math.round(newGame[Y].length / 2);

  newGame[Y + 1][X] = true;
  newGame[Y - 1][X - 1] = true;
  newGame[Y][X - 1] = true;
  newGame[Y][X + 1] = true;
  newGame[Y - 1][X] = true;
  return newGame;
};

export const gliderPattern = (): boolean[][] => {
  const newGame = createColumnsAndRows(DEFAULT_VALUES.COLUMUNS_AND_ROWS);
  const Y = Math.round(newGame.length / 2);
  const X = Math.round(newGame[Y].length / 2);

  newGame[Y - 1][X] = true;
  newGame[Y][X - 1] = true;
  newGame[Y + 1][X] = true;
  newGame[Y - 1][X - 1] = true;
  newGame[Y - 1][X + 1] = true;
  return newGame;
};

export const spaceShipPattern = (): boolean[][] => {
  const newGame = createColumnsAndRows(DEFAULT_VALUES.COLUMUNS_AND_ROWS);
  const Y = Math.round(newGame.length / 2);
  const X = Math.round(newGame[Y].length / 2);

  newGame[Y - 1][X] = true;
  newGame[Y][X - 1] = true;
  newGame[Y + 1][X - 1] = true;
  newGame[Y + 2][X - 1] = true;
  newGame[Y + 2][X] = true;
  newGame[Y + 2][X] = true;
  newGame[Y + 2][X + 1] = true;
  newGame[Y + 2][X + 2] = true;
  newGame[Y + 1][X + 3] = true;
  newGame[Y - 1][X + 3] = true;
  return newGame;
};

export const RpentominoPattern = (): boolean[][] => {
  const newGame = createColumnsAndRows(DEFAULT_VALUES.COLUMUNS_AND_ROWS);
  const Y = Math.round(newGame.length / 2);
  const X = Math.round(newGame[Y].length / 2);

  newGame[Y][X] = true;
  newGame[Y + 1][X] = true;
  newGame[Y - 1][X] = true;
  newGame[Y][X - 1] = true;
  newGame[Y - 1][X + 1] = true;
  return newGame;
};
