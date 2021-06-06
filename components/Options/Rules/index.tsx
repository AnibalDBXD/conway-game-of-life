import Image from 'next/image'

import Button from '../../Button'
import Popup from '../../Popup'
import { IMAGE_SIZE } from '../utils'
import { ImageContainer, StyledFooter } from './styles'

const Rules = (): JSX.Element => {
  return (
    <Popup title="Rules" trigger={<Button>Rules</Button>}>
      <>
        <p>
          This is the Game of Life, it consists on an infinite, two-dimensional{' '}
          <strong>orthogonal</strong> grid of square cells, each of which is in
          one of two possible states, live or dead
        </p>
        <p>
          Every cell interacts with its eight <strong>neighbours</strong>, which
          are the cells that are horizontally, vertically, or diagonally
          adjacent.
        </p>
        <ImageContainer>
          <Image
            src="/img/cell.png"
            alt="Cell without neighbours"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </ImageContainer>
        <p>At each step in time, the following transitions occur:</p>
        <ul>
          <li>
            Any live cell with fewer than <strong>two</strong> live neighbours{' '}
            <strong>dies</strong>, as if by <strong>underpopulation</strong>.
          </li>

          <li>
            Any live cell with <strong>two or three</strong> live neighbours
            lives on to the next generation.
          </li>

          <li>
            Any live cell with more than <strong>three</strong> live neighbours
            dies, as if by <strong>overpopulation</strong>.
          </li>

          <li>
            Any dead cell with exactly <strong>three</strong> live neighbours
            becomes a live cell, as if by <strong>reproduction</strong>.
          </li>
        </ul>
        <p>
          These rules, which compare the behavior of the automaton to real life,
          can be condensed into the following:
        </p>
        <ul>
          <li>
            Any live cell with <strong>two or three</strong> live neighbours
            survives.
          </li>

          <li>
            Any dead cell with <strong>three</strong> live neighbours becomes a
            live cell.
          </li>

          <li>
            All other live cells die in the next generation. Similarly, all
            other dead cells stay dead.
          </li>
        </ul>

        <StyledFooter
          target="_blank"
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          rel="noreferrer"
        >
          <small>More information</small>
        </StyledFooter>
      </>
    </Popup>
  )
}

export default Rules
