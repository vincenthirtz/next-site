const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
})

server.get('/photo/:id', (req, res) => {
  const query = { id: req.params.id }
  return app.render(req, res, '/photo', query)
})

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(4062, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:4062')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})