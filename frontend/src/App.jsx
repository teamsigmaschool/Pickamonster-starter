import { useState } from 'react'
import DeckPage from './components/DeckPage'
import GamePage from './components/GamePage'
import Leaderboard from './components/Leaderboard'
import './App.css'

function App() {
  const [page, setPage] = useState('deck')

  return (
    <>
      <header className="site-header">
        <p className="wordmark">Pickamonster</p>
        <nav>
          <button className={page === 'deck' ? 'active' : ''} onClick={() => setPage('deck')}>Deck</button>
          <button className={page === 'play' ? 'active' : ''} onClick={() => setPage('play')}>Play</button>
          <button className={page === 'leaderboard' ? 'active' : ''} onClick={() => setPage('leaderboard')}>Leaderboard</button>
        </nav>
      </header>

      <main>
        {page === 'deck' && <DeckPage />}
        {page === 'play' && <GamePage />}
        {page === 'leaderboard' && <Leaderboard />}
      </main>
    </>
  )
}

export default App
