import style from './books.module.css'
import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { TbTrashX } from 'react-icons/tb'
import { FaEdit } from 'react-icons/fa'

export function Books() {
  let [books, setBooks] = useState([])
  let [update, setUpdate] = useState(false)

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((json) => {
        setBooks(json.books)
      })
  }, [update])

  function handleDelete(id) {
    fetch(`/api/books/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
    setUpdate(!update)
  }

  return (
    <>
      <div className={style.books}>
        <div className={style.container}>
          {books.map((book) => (
            <ul className={style.ul} key={book.id}>
              <li className={style.li}>
                <div className={style.content}>
                  <img className={style.img} src={book.imgUrl} alt="" />

                  <nav className={style.nav}>
                    <ul>
                      <li>
                        <Link to={`/edit_book/${book.id}`}>
                          <FaEdit className={style.icon} />
                          Editar
                        </Link>
                      </li>
                      <li>
                        <button onClick={() => handleDelete(book.id)}>
                          <TbTrashX className={style.icon} />
                          Excluir
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </li>
              <li className={style.li}>
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
  )
}
