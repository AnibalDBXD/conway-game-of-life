import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Primary } from '../stories/Home.stories'
import 'jest-styled-components'
import { COLORS } from '../common/styles'
import { squarePattern } from '../components/Options/Tips/TipList/utils'
import { DEFAULT_VALUES } from '../context/Game/utils'

export const CellLive = `background-color: ${COLORS.WHITE}`
export const CellDeath = `background-color: ${COLORS.MINE_SHAFT}`
export const WhaitTime = 1000

describe('<Home />', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  test('Render', () => {
    const { asFragment } = render(<Primary {...Primary.args} />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Click a cell and reset', () => {
    const { getByTestId, getByText } = render(<Primary {...Primary.args} />)

    const Cell00 = getByTestId('00')
    fireEvent.click(Cell00)

    expect(Cell00).toHaveStyle(CellLive)
    //reset
    fireEvent.click(getByText('Reset'))
    expect(Cell00).toHaveStyle(CellDeath)
  })
  test('Click a cell and play', () => {
    const { getByTestId } = render(<Primary {...Primary.args} />)

    const Cell00 = getByTestId('00')
    act(() => {
      fireEvent.click(Cell00)
      // play
      fireEvent.click(getByTestId('PlayPauseButton'))
      jest.advanceTimersByTime(WhaitTime)
      expect(Cell00).toHaveStyle(CellDeath)
    })
    act(() => {
      fireEvent.click(Cell00)
      // play with space bar
      fireEvent.keyDown(document)
      jest.advanceTimersByTime(WhaitTime)
      expect(Cell00).toHaveStyle(CellDeath)
    })
  })
  test('Should revive the cells by clicking a tip', () => {
    const { getByTestId, getByText, getByAltText } = render(
      <Primary {...Primary.args} />
    )

    fireEvent.click(getByText('Tips'))
    act(() => {
      fireEvent.click(getByAltText('Square figure'))
      const SqueareFigure = squarePattern()

      const Y = Math.round(SqueareFigure.length / 2)
      const X = Math.round(SqueareFigure[Y].length / 2)
      const Cell88 = getByTestId(`${Y}${X}`)
      const Cell89 = getByTestId(`${Y}${X + 1}`)
      const Cell98 = getByTestId(`${Y + 1}${X}`)
      const Cell99 = getByTestId(`${Y + 1}${X + 1}`)
      jest.advanceTimersByTime(WhaitTime)
      expect(Cell88).toHaveStyle(CellLive)
      expect(Cell89).toHaveStyle(CellLive)
      expect(Cell98).toHaveStyle(CellLive)
      expect(Cell99).toHaveStyle(CellLive)
    })
  })
  test('Change the Columns&Rows and apply changes', () => {
    const { getByDisplayValue, getByText, getByTestId } = render(
      <Primary {...Primary.args} />
    )
    const columnsAndRowsInput = getByDisplayValue(
      DEFAULT_VALUES.COLUMUNS_AND_ROWS
    )

    const newColumnsAndRows = 20
    fireEvent.change(columnsAndRowsInput, {
      target: {
        value: newColumnsAndRows,
      },
    })

    act(() => {
      //Check limit columuns&rows
      const lastCell = `${DEFAULT_VALUES.COLUMUNS_AND_ROWS - 1}${
        DEFAULT_VALUES.COLUMUNS_AND_ROWS - 1
      }`
      getByTestId(lastCell)

      fireEvent.click(getByText('Apply changes'))
      jest.advanceTimersByTime(WhaitTime)
      const newLastCell = `${newColumnsAndRows - 1}${newColumnsAndRows - 1}`
      getByTestId(newLastCell)
    })
  })
  test('Change the time and apply changes', () => {
    const { getByDisplayValue, getByText, getByTestId } = render(
      <Primary {...Primary.args} />
    )
    const timeInput = getByDisplayValue(DEFAULT_VALUES.TIME)

    const newTime = 1000
    fireEvent.change(timeInput, {
      target: {
        value: newTime,
      },
    })

    // Check old time
    act(() => {
      fireEvent.click(getByTestId('PlayPauseButton'))
      fireEvent.click(getByTestId('00'))
      jest.advanceTimersByTime(100)
      expect(getByTestId('00')).toHaveStyle(CellLive)
      jest.advanceTimersByTime(WhaitTime)
      expect(getByTestId('00')).toHaveStyle(CellDeath)
      fireEvent.click(getByTestId('PlayPauseButton'))
    })
    // Check new time
    act(() => {
      fireEvent.click(getByText('Apply changes'))
      fireEvent.click(getByTestId('PlayPauseButton'))
      fireEvent.click(getByTestId('00'))
      jest.advanceTimersByTime(900)
      expect(getByTestId('00')).toHaveStyle(CellLive)
      jest.advanceTimersByTime(WhaitTime)
      expect(getByTestId('00')).toHaveStyle(CellDeath)
    })
  })
})
