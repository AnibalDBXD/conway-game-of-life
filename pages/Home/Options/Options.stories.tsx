/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Story, Meta } from "@storybook/react";
import GameProvider from "../../../context/Game/GameProvider";

import Cell from ".";

export default {
  title: "Pages/Home/Options",
  component: Cell,
  parameters: {
    docs: {
      description: {
        component: "Table's cell"
      }
    },
  }
} as Meta;

const Template: Story = () => <GameProvider><Cell /></GameProvider>;

export const Primary = Template.bind({});
