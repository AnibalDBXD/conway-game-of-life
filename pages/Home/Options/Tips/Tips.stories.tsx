/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Story, Meta } from "@storybook/react";

import Tips from ".";

export default {
  title: "Pages/Home/Options/Tips",
  component: Tips,
  parameters: {
    docs: {
      description: {
        component: "Play or pause button"
      }
    },
  }
} as Meta;

const Template: Story = () => <Tips />;

export const Primary = Template.bind({});