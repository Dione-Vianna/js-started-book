import style from './books.module.css';
import React, { useState } from 'react';

import books from '../../api/books';

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

  function Logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <>
      <button onClick={Logout}>Sair</button>
      <form onSubmit={handleSubmit} className={style.form}>
        <input type="text" name="name" placeholder="Nome do livro" />
        <input type="text" name="author" placeholder="Autor" />
        <input type="text" name="description" placeholder="Descrição" />
        <input type="text" name="year" placeholder="Ano de lançamento" />
        <input type="text" name="imgUrl" placeholder="Url da imagem" />

        <button type="submit">Cadastra</button>
      </form>

      <div className={style.books}>
        <div className={style.container}>
          {books.map((book) => (
            <ul>
              <li>
                <img src={book.imgUrl} alt="" />
              </li>
              <li>{book.name}</li>
              <li>{book.author}</li>
              <li>{book.description}</li>
              <li>{book.year}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
