import { useState } from 'react';

export function Create() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    imgUrl: '',
    year: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(book);

    fetch('api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  }

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="ImgUrl"
          value={book.imgUrl}
          onChange={(e) => setBook({ ...book, imgUrl: e.target.value })}
        />
        <input
          type="text"
          placeholder="year"
          value={book.year}
          onChange={(e) => setBook({ ...book, year: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
