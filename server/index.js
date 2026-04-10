const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const Contact = require('./models/Contact')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const mongoUri = process.env.MONGO_URI

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Name, email, subject and message are required.' })
  }

  try {
    const contact = new Contact({ name, email, phone, subject, message })
    await contact.save()
    res.status(201).json({ message: 'Contact details saved successfully.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Unable to save contact details.' })
  }
})

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })
