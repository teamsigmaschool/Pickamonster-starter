import { useState } from 'react'

// Static screen: the form keeps what you type, but Add to deck does nothing yet.
function AddCardForm() {
  const [form, setForm] = useState({ name: '', power: '', speed: '', charm: '' })
  const [status, setStatus] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('Not connected yet.')
  }

  return (
    <aside className="add-card">
      <p className="eyebrow">New card</p>
      <h2>Add a card</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Example: Kappa" />

        <div className="stat-inputs">
          <label htmlFor="power">Power<input id="power" name="power" type="number" value={form.power} onChange={handleChange} /></label>
          <label htmlFor="speed">Speed<input id="speed" name="speed" type="number" value={form.speed} onChange={handleChange} /></label>
          <label htmlFor="charm">Charm<input id="charm" name="charm" type="number" value={form.charm} onChange={handleChange} /></label>
        </div>

        <label htmlFor="art">Card art</label>
        <input id="art" type="file" accept="image/*" />

        <button type="submit">Add to deck</button>
      </form>
      {status && <p className="status">{status}</p>}
    </aside>
  )
}

export default AddCardForm
