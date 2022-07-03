import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from '../stories/Rules.stories';
import 'jest-styled-components';

describe('<Rules />', () => {
  test('Render', () => {
    const { asFragment } = render(<Primary />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Click button and show the rules', () => {
    const { getByText, getAllByText, getByAltText } = render(<Primary />);
    const rulesButton = getAllByText('Rules')[0];
    fireEvent.click(rulesButton);
    const rulesTitle = getAllByText('Rules')[1];
    const moreInfo = getByText('More information');
    const image = getByAltText('Cell without neighbours');
    const firstText = getByText(/This is the Game of Life/i);

    expect(rulesTitle).toBeInTheDocument();
    expect(moreInfo).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(firstText).toBeInTheDocument();
  });
});
