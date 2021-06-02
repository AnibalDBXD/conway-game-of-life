/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Story, Meta } from "@storybook/react";

import Home from ".";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    docs: {
      description: {
        component: "Home page"
      }
    },
  }
} as Meta;

const Template: Story = () => <Home />;

export const Primary = Template.bind({});