import { Router } from './Route';
import './global.css';

import { createServer, Model } from 'miragejs';
import books from './api/books.js';

createServer({
  models: {
    book: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/books', (schema, request) => {
      return schema.books.all();
    });
    this.post('/books', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.books.create(attrs);
    });
  },

  seeds(server) {
    // for (let i = 0; i < books.length; i++) {
    //   server.create('book', books[i]);
    // }
    // books.forEach((book) => {
    //   server.create('book', book);
    // });
    // for (let book of books) {
    //   server.create('book', book);
    // }
    books.map((book) => server.create('book', book));
    // server.create('book', { name: 'Inception', year: 2010 });
    // server.create('book', { name: 'Interstellar', year: 2014 });
    // server.create('book', { name: 'Dunkirk', year: 2017 });
  },
});

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
