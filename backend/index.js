require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }))
app.use(express.json())

// Quick check that the server is up and can reach the database.
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT COUNT(*)::int AS cards FROM cards')
    res.json({ ok: true, cards: result.rows[0].cards })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: 'Cannot reach the database. Check DATABASE_URL in .env.' })
  }
})

// Your routes go here.

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Pickamonster backend running on http://localhost:${port}`))
