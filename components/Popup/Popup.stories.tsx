/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Story, Meta } from "@storybook/react";

import Popup from ".";
import { IPopup } from "./types";
import Button from "../Button";

export default {
  title: "Components/Popup",
  component: Popup,
  parameters: {
    docs: {
      description: {
        component: "Play or pause button"
      }
    },
  }
} as Meta;

const Template: Story<IPopup> = (args: IPopup) => <Popup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Popup title",
  children: "lorem impsum lorem impsumlorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum",
  trigger: <Button>Trigger</Button>
};