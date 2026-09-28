import sampleCards from '../sampleCards'
import AddCardForm from './AddCardForm'
import CardView from './CardView'

// Static screen: shows sample cards. Not connected to anything yet.
function DeckPage() {
  return (
    <div className="deck-page">
      <section>
        <p className="eyebrow">The deck</p>
        <h1>{sampleCards.length} cards in the deck. Add 4 more to play.</h1>
        <div className="card-grid">
          {sampleCards.map((card) => (
            <CardView key={card.id} card={card} />
          ))}
        </div>
      </section>
      <AddCardForm />
    </div>
  )
}

export default DeckPage
