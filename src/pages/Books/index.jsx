import style from './books.module.css'
import React, { useState, useEffect } from 'react'

// import { Link } from 'react-router-dom'
// import { TbTrashX } from 'react-icons/tb'
// import { FaEdit } from 'react-icons/fa'

export function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('api/books')
      .then((response) => response.json())

      .then((data) => {
        console.log(data.books)
        setBooks(data.books)
      })
  }, [])

  return (
    <>
      <div className={style.books}>
        <div className={style.container}>
          {books.map((book) => (
            <ul className={style.ul} key={book.id}>
              <li className={style.li}>
                <div className={style.content}>
                  <img className={style.img} src={book.imgUrl} alt="" />

                  {/* <nav className={style.nav}>
                    <ul>
                      <li>
                        <Link to="/edit_book">
                          <FaEdit className={style.icon} />
                          Editar
                        </Link>
                      </li>
                      <li>
                        <button>
                          <TbTrashX className={style.icon} />
                          Excluir
                        </button>
                      </li>
                    </ul>
                  </nav> */}
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
