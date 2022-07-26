import { Router } from './Route'
import './global.css'

import { createServer, Model } from 'miragejs'
import books from './api/books.js'

createServer({
  models: {
    book: Model,
  },

  routes() {
    this.namespace = 'api'

    this.get('/books', (schema, request) => {
      return schema.books.all()
    })

    this.post('/books', (schema, request) => {
      let attrs = JSON.parse(request.requestBody)

      return schema.books.create(attrs)
    })
  },

  seeds(server) {
    books.map((book) => server.create('book', book))
  },
})

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
