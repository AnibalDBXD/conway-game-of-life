import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Primary } from '../stories/Options.stories'
import 'jest-styled-components'
import { DEFAULT_VALUES } from '../context/Game/utils'

describe('<Options />', () => {
  test('Render', () => {
    const { asFragment } = render(<Primary />)
    expect(asFragment()).toMatchSnapshot()
  })
  test("input can't change if pause is true", () => {
    const { getByDisplayValue, getByTestId } = render(<Primary />)
    const timeInput = getByDisplayValue(DEFAULT_VALUES.TIME)
    const columsnAndRowsInput = getByDisplayValue(
      DEFAULT_VALUES.COLUMUNS_AND_ROWS
    )
    const playPlauseButton = getByTestId('PlayPauseButton')

    act(() => {
      fireEvent.click(playPlauseButton)
      const newTimeValue = 800
      fireEvent.change(timeInput, {
        target: {
          value: newTimeValue,
        },
      })
      const newColumnsAndRows = 30
      fireEvent.change(columsnAndRowsInput, {
        target: {
          value: newColumnsAndRows,
        },
      })
      expect(timeInput).toHaveValue(String(DEFAULT_VALUES.TIME))
      expect(columsnAndRowsInput).toHaveValue(
        String(DEFAULT_VALUES.COLUMUNS_AND_ROWS)
      )
    })
  })
})
