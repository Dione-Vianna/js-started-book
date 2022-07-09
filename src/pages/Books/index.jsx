import style from './books.module.css';
import React, { useState, useRef } from 'react';
import { useDetectOutsideClick } from './useDetectOutsideClick';

// import { BiDotsVertical } from 'react-icons/bi';
// import { TbTrashX } from 'react-icons/tb';
// import { FaEdit } from 'react-icons/fa';

import './styles.css';

import books from './books';

export function Books(props) {
  const [newBook, setNewBook] = useState(books);
  const dropdownRef = useRef(null);
  // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  // const onClick = () => setIsActive(!isActive);

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
            <ul className={style.ul} key={book.id}>
              <li className={style.li}>
                <div className={style.content}>
                  <img className={style.img} src={book.imgUrl} alt="" />

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

                      <nav ref={dropdownRef} className={`menu active`}>
                        <ul>
                          {/* <li>
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
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </li>
              <li className={style.title}>
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
