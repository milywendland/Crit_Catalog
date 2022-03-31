import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav">
          <Link to="/">Home</Link>
        </div>
        <div className="nav">
          <Link to="/games/lists">List</Link>
        </div>
        <div className="nav">
          <Link to="/About">About</Link>
        </div>
        <div className="nav">
          <Link to="/SubmitGame">Submit Game</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
