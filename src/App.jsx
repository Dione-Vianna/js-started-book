import { Router } from './Router';
import './global.css';
import { createServer, Model } from 'miragejs';

import { ThemeProvider } from './context';

import books from './api/books';
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
      const book = JSON.parse(request.requestBody);
      return schema.books.create(book);
    });

    this.delete('/books/:id', (schema, request) => {
      const id = request.params.id;
      return schema.books.find(id).destroy();
    });

    this.put('/books/:id', (schema, request) => {
      const id = request.params.id;
      const book = JSON.parse(request.requestBody);
      return schema.books.find(id).update(book);
    });
  },

  seeds(server) {
    for (let i = 0; i < books.length; i++) {
      server.create('book', books[i]);
    }
  },
});

// server.delete('/books/:id', (schema, request) => {
//   const { id } = request.params;
//   const book = schema.books.find(id);
//   schema.books.remove(book);
//   return {};
// });

// server.post('/books', (schema, request) => {
//   const { name, author, description, year, imgUrl } = request;
//   console.log(request);

//   const book = schema.books.create({ name, author, description, year, imgUrl });
//   return book;
// });

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
