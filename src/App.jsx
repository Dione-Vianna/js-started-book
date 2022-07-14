import { Router } from './Router';

import './global.css';

import { createServer } from 'miragejs';

import books from './api/books';

let server = createServer();
server.get('/books', {
  books: books,
});

function App() {
  return <Router />;
}

export default App;
