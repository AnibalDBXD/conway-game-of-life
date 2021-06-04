import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from './Cell.stories';
import "jest-styled-components";
import { CellDeath, CellLive } from '../../Home.test';

describe('<Cell />', () => {
  test('Render', () => {
    const { asFragment } = render(<Primary />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Kill and revive cell', () => {
    const { getByTestId } = render(<Primary />);
    const cell00 = getByTestId("00");
    fireEvent.click(cell00);
    expect(cell00).toHaveStyle(CellLive);
    fireEvent.click(cell00);
    expect(cell00).toHaveStyle(CellDeath);
  });
});