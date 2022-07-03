/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import GameProvider from '../context/Game/GameProvider';

import Options from '../components/Options';

export default {
  title: 'Pages/Home/Options',
  component: Options,
  parameters: {
    docs: {
      description: {
        component: 'Table options',
      },
    },
  },
} as Meta;

const Template: Story = () => (
  <GameProvider>
    <Options />
  </GameProvider>
);

export const Primary = Template.bind({});
