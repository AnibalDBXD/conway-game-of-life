import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Primary } from '../stories/PlayPause.stories'
import 'jest-styled-components'

describe('<PlayPause />', () => {
  test('Render', () => {
    const { asFragment } = render(<Primary />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Render as pause', () => {
    const { asFragment } = render(<Primary pause={true} />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('handle click', () => {
    const mockHandler = jest.fn()
    const { getByRole } = render(<Primary onClick={mockHandler} />)

    const button = getByRole('button')
    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
