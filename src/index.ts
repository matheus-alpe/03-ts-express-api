import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to TS Express API'
  })
})

app.listen(3333, () => {
  console.log('Server is running at http://localhost:3333/')
})
