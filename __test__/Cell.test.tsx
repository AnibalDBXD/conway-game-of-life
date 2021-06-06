import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Cell from '../components/Table/Cell'
import 'jest-styled-components'

const Id = 'id'
const CellContainer = ({
  handleClick,
}: {
  handleClick?: () => void
}): JSX.Element => (
  <table>
    <tbody>
      <tr>
        <Cell isActive={false} onClick={handleClick} data-testid={Id} />
      </tr>
    </tbody>
  </table>
)

describe('<Cell />', () => {
  test('Render', () => {
    const { asFragment } = render(<CellContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('handle Click', () => {
    const mockHandler = jest.fn()
    const { getByTestId } = render(<CellContainer handleClick={mockHandler} />)
    const cell00 = getByTestId(Id)
    fireEvent.click(cell00)
    expect(mockHandler).toBeCalledTimes(1)
  })
})
