import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function EditBook() {
  let { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`/books/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setBook(json.books);
      });
  }, [id]);
  console.log(book);

  function handleUpdateBook(event) {
    event.preventDefault();

    const { name, author, description, year, imgUrl } = event.target;

    const myBook = {
      name: name.value,
      author: author.value,
      description: description.value,
      year: year.value,
      imgUrl: imgUrl.value,
    };

    fetch(`/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myBook),
    });
  }

  return (
    <div>
      <h1>Edit Book</h1>
      <form action="put" onSubmit={handleUpdateBook}>
        <input
          value={book.id}
          type="text"
          name="name"
          placeholder="Nome do livro"
        />
        <input
          value={book.name}
          type="text"
          name="author"
          placeholder="Autor"
        />
        <input
          value={book.description}
          type="text"
          name="description"
          placeholder="Descrição"
        />
        <input
          value={book.year}
          type="text"
          name="year"
          placeholder="Ano de lançamento"
        />
        <input
          value={book.imgUrl}
          type="text"
          name="imgUrl"
          placeholder="Url da imagem"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
