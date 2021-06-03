import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from './Popup.stories';
import "jest-styled-components";

describe('<Popup />', () => {
  test("Render", () => {
    const { asFragment } = render(<Primary {...Primary.args} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("Render on popup", () => {
    const { asFragment, getByText } = render(<Primary {...Primary.args} />);
    const button = getByText("Trigger");

    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });
  test("Should be show title and childrens and click button close", () => {
    const { getByText, queryByText, getAllByRole } = render(<Primary {...Primary.args} />);
    const button = getByText("Trigger");
    fireEvent.click(button);

    getByText("Popup title");
    getByText("lorem impsum lorem impsumlorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum");

    fireEvent.click(getAllByRole("button")[0]);
    expect(queryByText("Popup title")).toBeNull();
  });
});