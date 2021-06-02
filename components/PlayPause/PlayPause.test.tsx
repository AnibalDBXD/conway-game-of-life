import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from './PlayPause.stories';
import "jest-styled-components";

describe('<Input />', () => {
  test("Render", () => {
    const { asFragment } = render(<Primary />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("handle click", () => {
    const mockHandler = jest.fn();
    const { getByRole } = render(<Primary onClick={mockHandler} />);

    const button = getByRole("button");
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});