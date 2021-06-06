import Table from '../Table'
import Options from '../Options'
import { StyledHome } from './styles'
import GameProvider from '../../context/Game/GameProvider'

const Home = (): JSX.Element => {
  return (
    <GameProvider>
      <StyledHome>
        <Table />
        <Options />
      </StyledHome>
    </GameProvider>
  )
}

export default Home
