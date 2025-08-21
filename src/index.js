const express = require('express');

const App = express();

App.use(express.json());

App.get('/home', async (req, res) => {
  return res.send("Welcome to wendys")
})

App.get('/cheese', async (req, res) => {
  return res.send("cake")
})


try {
  App.listen(3000, () => {
    console.log('Listening on port 3000')
  })
} catch (e) {
  console.error(e)
}