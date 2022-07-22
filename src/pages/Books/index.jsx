import style from './books.module.css';
import React, { useState, useEffect, useContext } from 'react';

import { ThemeContext } from '../../context';

import { Link } from 'react-router-dom';
import { TbTrashX } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';

export function Books(props) {
  const { state } = useContext(ThemeContext);
  let [books, setBooks] = useState([]);
  let [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((json) => {
        setBooks(json.books);
      });
  }, [update]);

  function handleDelete(id) {
    fetch(`/api/books/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setUpdate(!update);
  }

  return (
    <>
      <div className={style.books}>
        <div className={style.container}>
          {books.map((book) => (
            <ul
              style={{
                backgroundColor: state.theme === 'light' ? '#222' : '#fff',
              }}
              className={style.ul}
              key={book.id}
            >
              <li className={style.li}>
                <div className={style.content}>
                  <img className={style.img} src={book.imgUrl} alt="" />

                  <div>
                    <div className={style.menu_container}>
                      <nav className={style.nav}>
                        <ul>
                          <li>
                            <Link to="edit" className={style.button}>
                              <p>
                                <FaEdit className={style.icon} />
                              </p>
                              <p>Editar</p>
                            </Link>
                          </li>
                          <li>
                            <button
                              className={style.button}
                              onClick={() => {
                                handleDelete(book.id);
                              }}
                            >
                              <p>
                                <TbTrashX className={style.icon} />
                              </p>
                              <p>Excluir</p>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2
                  style={{
                    color: state.theme === 'light' ? '#fff' : '#222',
                  }}
                  className={style.title}
                >
                  {book.name}
                </h2>
              </li>
              <li className={style.author}>
                <span className={style.author}>Autor: {book.author}</span>
              </li>
              <li className={style.li}>
                <h4
                  style={{
                    border:
                      state.theme === 'light'
                        ? '1px dashed #fff'
                        : '1px dashed #222',
                  }}
                  className={style.h4}
                >
                  {book.description.length > 150
                    ? book.description.substring(0, 150) + '...'
                    : book.description}
                </h4>
              </li>
              <li className={style.li}>
                <span className={style.text}>
                  Ano de lançamento: {book.year}
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
