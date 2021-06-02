/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Story, Meta } from "@storybook/react";

import Table from ".";

export default {
  title: "Pages/Home/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: "Game table"
      }
    },
  }
} as Meta;

const Template: Story = () => <Table />;

export const Primary = Template.bind({});