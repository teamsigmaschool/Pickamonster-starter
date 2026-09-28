import sampleCards from '../sampleCards'
import CardView from './CardView'

// Static screen: what the start form and the table look like.
// Nothing here talks to the backend yet.
function GamePage() {
  return (
    <>
      <form className="start" onSubmit={(event) => event.preventDefault()}>
        <p className="eyebrow">New game</p>
        <h1>You against the computer</h1>
        <label htmlFor="playerName">Your name for the leaderboard</label>
        <input id="playerName" />
        <button type="submit">Deal the cards</button>
      </form>

      <hr />

      <div className="table">
        <p className="scoreline">Round 0 of 20 · Your pile 5 · Computer's pile 5</p>
        <div className="duel">
          <div>
            <p className="eyebrow">Your card</p>
            <CardView card={sampleCards[0]} onPick={() => {}} />
          </div>
          <div>
            <p className="eyebrow">Computer</p>
            <CardView faceDown />
          </div>
        </div>
        <div className="call">
          <p>Pick a stat on your card.</p>
        </div>
      </div>
    </>
  )
}

export default GamePage
