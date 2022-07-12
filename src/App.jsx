import { Route } from './Route';
import './global.css';

import { createServer } from 'miragejs';

let server = createServer();
server.get('/books', {
  books: [
    {
      id: '01',
      imgUrl: 'https://m.media-amazon.com/images/I/519goKdXs7L.jpg',
      author: 'Max Lucado',
      name: 'Você não esta sozinho',
      description:
        'Quanto de nosso tempo e esforço empregamos pensando em nós mesmos, em nossas qualidades, comparando-nos uns com os outros e fazendo tudo do nosso jeito? Mesmo nas orações, pedimos por merecidas promoções, mais reconhecimento ou vantagens.',
      year: 2012,
    },
    {
      id: '02',
      imgUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81DLqA8qubL.jpg',

      author: 'Max Lucado',
      name: 'Dias melhores virão',
      description:
        'Quando a vida parece estar sem rumo, Deus continua no controle. Quando perdemos o emprego, o casamento termina ou enfrentamos a morte de entes queridos, é normal procurar por respostas.',
      year: 2015,
    },
  ],
});

function App() {
  return (
    <div className="App">
      <Route />
    </div>
  );
}

export default App;
