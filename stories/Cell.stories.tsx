/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import Cell from '../components/Table/Cell';
import { ICellProps } from '../components/Table/Cell/types';

export default {
  title: 'Pages/Home/Table/Cell',
  component: Cell,
  parameters: {
    docs: {
      description: {
        component: "Table's cell",
      },
    },
  },
} as Meta;

const Template: Story<ICellProps> = (args: ICellProps) => <Cell {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isActive: false,
};

export const Secondary = Template.bind({});
Primary.args = {
  isActive: true,
};
