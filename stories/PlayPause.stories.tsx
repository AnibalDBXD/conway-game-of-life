/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import PlayPause from '../components/PlayPause';
import { IPlayPause } from '../components/PlayPause/types';

export default {
  title: 'Components/PlayPause',
  component: PlayPause,
  parameters: {
    docs: {
      description: {
        component: 'Play or pause button',
      },
    },
  },
} as Meta;

const Template: Story<IPlayPause> = (args: IPlayPause) => (
  <PlayPause {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  pause: false,
};
