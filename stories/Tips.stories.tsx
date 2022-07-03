/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tips from '../components/Options/Tips';

export default {
  title: 'Pages/Home/Options/Tips',
  component: Tips,
  parameters: {
    docs: {
      description: {
        component: 'Game tips popup',
      },
    },
  },
} as Meta;

const Template: Story = () => <Tips />;

export const Primary = Template.bind({});
