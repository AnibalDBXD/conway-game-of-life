import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Primary } from '../stories/Button.stories'
import 'jest-styled-components'

describe('<Button />', () => {
  test('Render', () => {
    const { asFragment } = render(<Primary {...Primary.args} />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Click button', () => {
    const mockHandler = jest.fn()
    const { getByText } = render(
      <Primary onClick={mockHandler} {...Primary.args} />
    )
    const button = getByText('Click')

    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
  test('Click disable button', () => {
    const mockHandler = jest.fn()
    const { getByText } = render(
      <Primary disabled onClick={mockHandler} {...Primary.args} />
    )
    const button = getByText('Click')

    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(0)
  })
})
