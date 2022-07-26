import React, { useState, useEffect } from 'react';
import style from './books.module.css';
<<<<<<< HEAD

import { Link } from 'react-router-dom';
import { TbTrashX } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';

export function Books(props) {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then((res) => res.json())
      .then((json) => {
        setBooks(json.books);
      });
  }, []);

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const { name, author, description, year, imgUrl } = event.target;

  //   const myBook = {
  //     name: name.value,
  //     author: author.value,
  //     description: description.value,
  //     year: year.value,
  //     imgUrl: imgUrl.value,
  //   };

  return (
    <>
      {/* <form onSubmit={handleSubmit} className={style.form}>

  //   setNewBook([...newBook, myBook]);
  // }

  return (
    <>
      {/* 
      <form onSubmit={handleSubmit} className={style.form}>
>>>>>>> developer
        <input type="text" name="name" placeholder="Nome do livro" />
        <input type="text" name="author" placeholder="Autor" />
        <input type="text" name="description" placeholder="Descrição" />
        <input type="text" name="year" placeholder="Ano de lançamento" />
        <input type="text" name="imgUrl" placeholder="Url da imagem" />
  <button type="submit">Cadastra</button>



      </form> */}

=======
import React, { useState, useEffect } from 'react';

// import { TbTrashX } from 'react-icons/tb';
// import { FaEdit } from 'react-icons/fa';

export function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('api/books')
      .then((response) => response.json())

      .then((data) => {
        console.log(data.books);
        setBooks(data.books);
      });
  }, []);

  return (
    <>
>>>>>>> aula-sexta
      <div className={style.books}>
        <div className={style.container}>
          {books.map((book) => (
            <ul className={style.ul} key={book.id}>
              <li className={style.li}>
                <div className={style.content}>
                  <img className={style.img} src={book.imgUrl} alt="" />

<<<<<<< HEAD
                  <div>
                    <div className={style.menu_container}>
                      <nav className={style.nav}>
                        <ul>
                          <li>
                            <Link to="edit">
                              <FaEdit />
                              Editar
                            </Link>
                          </li>
                          <li>
                            <Link to="trash">
                              <TbTrashX />
                              Excluir
                            </Link>
                          </li>
                        </ul>
                      </nav>
=======
                  <div className={style.config}>
                    {/* <a href="/" className={style.edit}>
                      <BiDotsVertical size={20} />
                    </a>
                    
                    {/* <a href="/">
                    delete
                    <TbTrashX />
                  </a> */}

                    <div className="menu-container">
                      {/* <BiDotsVertical onClick={onClick} size={20} /> */}

                      {/* <nav className={`menu active`}>
                        <ul>
                          <li>
                            <a href="#">
                              <FaEdit />
                              Editar
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <TbTrashX />
                              Excluir
                            </a>
                          </li>
                        </ul>
                      </nav> */}
>>>>>>> aula-sexta
                    </div>
                  </div>
                </div>
              </li>
<<<<<<< HEAD
              <li className={style.title}>
=======
              <li className={style.li}>
>>>>>>> aula-sexta
                <h2 className={style.title}>{book.name}</h2>
              </li>
              <li className={style.author}>
                <span className={style.author}>Autor: {book.author}</span>
              </li>
              <li className={style.li}>
                <h4 className={style.h4}>
                  {book.description.length > 150
                    ? book.description.substring(0, 150) + '...'
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
