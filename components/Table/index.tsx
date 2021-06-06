import React, { useEffect, useState } from 'react'
import { useGameContext } from '../../context/Game/GameContext'
import Cell from './Cell'
import { StyledTableContainer, StyledTable } from './styles'
import { ICoordinates } from './types'
import {
  createCell,
  createColumnsAndRows,
  deleteCell,
  getNeighbours,
} from './utils'

const Table = (): JSX.Element => {
  const { isPause, numberOfColumnsAndRows, time, customGame } = useGameContext()
  const [Rows, setRows] = useState<boolean[][]>(
    createColumnsAndRows(numberOfColumnsAndRows)
  )

  const handleCellClick = (X: number, Y: number): void => {
    const cellData = { X, Y, Cells: Rows }
    const cell = Rows[Y][X]
    if (cell) {
      setRows(deleteCell(cellData))
    } else {
      setRows(createCell(cellData))
    }
  }

  const startGame = (): NodeJS.Timeout =>
    setInterval(() => {
      let gameState = [...Rows]

      const CellsToCreate: ICoordinates[] = []
      const CellsToDelete: ICoordinates[] = []

      Rows.forEach((columns, Y) => {
        columns.forEach((cell, X) => {
          const cellData = { X, Y, Cells: Rows }
          const neighbours = getNeighbours(cellData)
          const activeNeighbours = neighbours.filter((value) => value).length

          if (!cell) {
            if (activeNeighbours === 3) {
              CellsToCreate.push({ X, Y })
            }
          } else {
            if (activeNeighbours < 2 || activeNeighbours > 3) {
              CellsToDelete.push({ X, Y })
            }
          }
        })
      })

      CellsToCreate.forEach(({ X, Y }) => {
        gameState = createCell({ X, Y, Cells: gameState })
      })
      CellsToDelete.forEach(({ X, Y }) => {
        gameState = deleteCell({ X, Y, Cells: gameState })
      })
      setRows(gameState)
    }, time)

  useEffect(() => {
    if (!isPause) {
      const interval = startGame()
      return (): void => clearInterval(interval)
    }
  }, [isPause])

  useEffect(() => {
    const oldRows = [...Rows]
    const newRows = createColumnsAndRows(numberOfColumnsAndRows)
    if (newRows.length > oldRows.length) {
      oldRows.forEach((column, Y) => {
        column.forEach((cell, X) => {
          newRows[Y][X] = cell
        })
      })
    }
    if (newRows.length < oldRows.length) {
      oldRows.forEach((column, Y) => {
        column.forEach((cell, X) => {
          if (newRows[Y] !== undefined) {
            if (newRows[Y][X] !== undefined) {
              newRows[Y][X] = cell
            }
          }
        })
      })
    }
    setRows(newRows)
  }, [numberOfColumnsAndRows])

  useEffect(() => {
    if (customGame !== null) {
      setRows(customGame)
    }
  }, [customGame])

  return (
    <StyledTableContainer hideScrollbars={true} component="main">
      <StyledTable>
        <tbody>
          {Rows.map((cells, Y) => (
            <tr key={Y}>
              {cells.map((isLive, X) => (
                <Cell
                  isActive={isLive}
                  onClick={(): void => handleCellClick(X, Y)}
                  data-testid={String(Y) + String(X)}
                  key={String(Y) + String(X)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  )
}

export default Table
