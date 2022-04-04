import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Games from './pages/Games'
import About from './pages/About'
import SubmitGame from './pages/SubmitGame'
import GameDetails from './pages/GameDetails'
import EditGame from './pages/EditGame'
import List from './pages/List'
import AddToList from './pages/AddToList'

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
          <Route path="/games/details/:id/edit" element={<EditGame />} />
          <Route path="/games/lists" element={<List />} />
          <Route path="/games/lists/:id/add" element={<AddToList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
