const express = require('express')

const app = express()
app.use(express.json())
const test = require('./routes/api/Test')
app.use('/api/Test', test)

app.use((req, res) => {
  res.status(404).send({ err: 'We can not find what you are looking for' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use((req, res) => {
  res.status(404).send({ err: 'We can not find what you are looking for' })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))
