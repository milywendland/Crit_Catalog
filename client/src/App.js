import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Games from './pages/Games'
import About from './pages/About'
import SubmitGame from './pages/SubmitGame'
import GameDetails from './pages/GameDetails'
import Lists from './pages/Lists'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/games/details/:id" element={<GameDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/SubmitGame" element={<SubmitGame />} />
          {/* <Route path="/list/add/:id" element={<AddListItem />} /> */}
          <Route path="/Lists" element={<Lists />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
