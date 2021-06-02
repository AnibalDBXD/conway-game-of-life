import React, { ChangeEvent, useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from './Input.stories';
import "jest-styled-components";

const defaultValue = 5;
const Input = ({ disabled = false }: { disabled?: boolean}): JSX.Element => {
  const [value, setValue] = useState<number>(defaultValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(Number(event.target.value));
  };
  return <Primary {...Primary.args} disabled={disabled} value={value} onChange={handleChange} />;
};

describe('<Input />', () => {
  test("Render", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("Render label", () => {
    const { getByText } = render(<Input />);
    getByText("Label text");
  });
  test("Change value", () => {
    const { getByDisplayValue } = render(<Input />);
    const input = getByDisplayValue(defaultValue);

    const newValue = 10;
    fireEvent.change(input, {
      target: {
        value: newValue
      }
    });
    expect(input).toHaveValue(String(newValue));
  });
  test("It cannot fall below the minimum value", () => {
    const { getByDisplayValue } = render(<Input />);
    const input = getByDisplayValue(defaultValue);

    const notMinValue = -1;
    const minValue = 0;
    fireEvent.change(input, {
      target: {
        value: notMinValue
      }
    });
    expect(input).toHaveValue(String(minValue));
  });
  test("It cannot rise from the maximum value", () => {
    const { getByDisplayValue } = render(<Input />);
    const input = getByDisplayValue(defaultValue);

    const notMaxValue = 11;
    const maxValue = 10;
    fireEvent.change(input, {
      target: {
        value: notMaxValue
      }
    });
    expect(input).toHaveValue(String(maxValue));
  });
});