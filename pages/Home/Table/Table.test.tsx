import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from './Table.stories';
import "jest-styled-components";
import { CellLive } from '../Home.test';

describe('<Table />', () => {
  test('Render', () => {
    const { asFragment } = render(<Primary />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Click the table', () => {
    const { getByTestId } = render(<Primary />);
    const cell00 = getByTestId("00");
    fireEvent.click(cell00);
    expect(getByTestId("00")).toHaveStyle(CellLive);
  });
});