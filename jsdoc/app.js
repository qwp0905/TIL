const express = require('express')
const indexRouter = require('./routes')

const app = express()

app.use('/', indexRouter)

app.listen('3000', () => {
  console.log('listen on port 3000')
})
