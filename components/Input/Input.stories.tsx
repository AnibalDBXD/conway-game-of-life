/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ChangeEvent, useState } from "react";
import { Story, Meta } from "@storybook/react";

import Input from ".";
import { IInput } from "./types";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Main Input"
      }
    },
  }
} as Meta;

const Template: Story<IInput> = (args: IInput) => {
  const [value, setValue] = useState<number>();
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(Number(event.target.value));
  };
  return <Input value={value} onChange={handleChange} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  defaultValue: 5,
  min: 0,
  max: 10,
  label: "Label text",
};
