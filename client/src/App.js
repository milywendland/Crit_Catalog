import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Games from './pages/Games'
import About from './pages/About'
import CreateList from './pages/CreateList'
import SubmitGame from './pages/SubmitGame'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/game/:gameName/details" element={<GameDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/CreateList" element={<CreateList />} />
          <Route path="/SubmitGame" element={<SubmitGame />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
