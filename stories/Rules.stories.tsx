/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Story, Meta } from '@storybook/react'

import Rules from '../components/Options/Rules'

export default {
  title: 'Pages/Home/Options/Rules',
  component: Rules,
  parameters: {
    docs: {
      description: {
        component: 'Game rules popup',
      },
    },
  },
} as Meta

const Template: Story = () => <Rules />

export const Primary = Template.bind({})
