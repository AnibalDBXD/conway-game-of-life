import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from './Tips.stories';
import "jest-styled-components";

describe('<Tips />', () => {
  test('Render', () => {
    const { asFragment } = render(<Primary />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("Click button and show the tips", () => {
    const { getByText, getAllByText } = render(<Primary />);
    const tipsButton = getByText("Tips");
    fireEvent.click(tipsButton);
    const tipsTittle = getAllByText("Tips")[1];
    const smallTip = getByText(/You can/i);
    const firstPatternType = getByText("Estables");
    const secondPatternType = getByText("Movement");
    const thirdPatternType = getByText("Methuselahs");

    expect(tipsTittle).toBeInTheDocument();
    expect(smallTip).toBeInTheDocument();
    expect(firstPatternType).toBeInTheDocument();
    expect(secondPatternType).toBeInTheDocument();
    expect(thirdPatternType).toBeInTheDocument();
  });
});