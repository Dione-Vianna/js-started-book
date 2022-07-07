import style from './books.module.css';
import React, { useState } from 'react';

const books = [
  {
    imgUrl: 'https://m.media-amazon.com/images/I/519goKdXs7L.jpg',
    author: 'Max Lucado',
    name: 'Você não esta sozinho',
    description:
      'Quanto de nosso tempo e esforço empregamos pensando em nós mesmos, em nossas qualidades, comparando-nos uns com os outros e fazendo tudo do nosso jeito? Mesmo nas orações, pedimos por merecidas promoções, mais reconhecimento ou vantagens.',
    year: 2012,
  },
  {
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81DLqA8qubL.jpg',

    author: 'Max Lucado',
    name: 'Dias melhores virão',
    description:
      'Quando a vida parece estar sem rumo, Deus continua no controle. Quando perdemos o emprego, o casamento termina ou enfrentamos a morte de entes queridos, é normal procurar por respostas.',
    year: 2015,
  },

  {
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81DLqA8qubL.jpg',

    author: 'Max Lucado',
    name: 'Dias melhores virão',
    description:
      'Quando a vida parece estar sem rumo, Deus continua no controle. Quando perdemos o emprego, o casamento termina ou enfrentamos a morte de entes queridos, é normal procurar por respostas.',
    year: 2015,
  },
  {
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81DLqA8qubL.jpg',

    author: 'Max Lucado',
    name: 'Dias melhores virão',
    description:
      'Quando a vida parece estar sem rumo, Deus continua no controle. Quando perdemos o emprego, o casamento termina ou enfrentamos a morte de entes queridos, é normal procurar por respostas.',
    year: 2015,
  },
  {
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81DLqA8qubL.jpg',

    author: 'Max Lucado',
    name: 'Dias melhores virão',
    description:
      'Quando a vida parece estar sem rumo, Deus continua no controle. Quando perdemos o emprego, o casamento termina ou enfrentamos a morte de entes queridos, é normal procurar por respostas.',
    year: 2015,
  },
  {
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81DLqA8qubL.jpg',

    author: 'Max Lucado',
    name: 'Dias melhores virão',
    description:
      'Quando a vida parece estar sem rumo, Deus continua no controle. Quando perdemos o emprego, o casamento termina ou enfrentamos a morte de entes queridos, é normal procurar por respostas.',
    year: 2015,
  },
];

export function Books(props) {
  const [newBook, setNewBook] = useState(books);

  function handleSubmit(event) {
    event.preventDefault();

    const { name, author, description, year, imgUrl } = event.target;

    const myBook = {
      name: name.value,
      author: author.value,
      description: description.value,
      year: year.value,
      imgUrl: imgUrl.value,
    };

    setNewBook([...newBook, myBook]);
  }

  return (
    <>
      {/* 
      <form onSubmit={handleSubmit} className={style.form}>
        <input type="text" name="name" placeholder="Nome do livro" />
        <input type="text" name="author" placeholder="Autor" />
        <input type="text" name="description" placeholder="Descrição" />
        <input type="text" name="year" placeholder="Ano de lançamento" />
        <input type="text" name="imgUrl" placeholder="Url da imagem" />
  <button type="submit">Cadastra</button>

        
      </form> */}

      <div className={style.books}>
        <div className={style.container}>
          {books.map((book) => (
            <ul className={style.ul}>
              <li className={style.li}>
                <img className={style.img} src={book.imgUrl} alt="" />
              </li>
              <li className={style.li}>
                <h2 className={style.title}>Livro: {book.name}</h2>
              </li>
              <li className={style.li}>
                <span className={style.author}>Autor: {book.author}</span>
              </li>
              <li className={style.li}>
                <span>Descrição</span>
                <h4 className={style.h4}>
                  {book.description.length > 200
                    ? book.description.substring(0, 200) + '...'
                    : book.description}
                </h4>
              </li>
              <li className={style.li}>
                <p className={style.text}>Ano de lançamento: {book.year}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
