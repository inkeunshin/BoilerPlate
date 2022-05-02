const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!안녕하세요')
})

app.post("/register", (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})