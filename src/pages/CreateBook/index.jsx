import style from './createbook.module.css';

export function CreateBook() {
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

    console.log(myBook);
  }
  return (
    <div className={style.container}>
      <h1>Create Book</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <input type="text" name="name" placeholder="Nome do livro" />
        <input type="text" name="author" placeholder="Autor" />
        <input type="text" name="description" placeholder="Descrição" />
        <input type="text" name="year" placeholder="Ano de lançamento" />
        <input type="text" name="imgUrl" placeholder="Url da imagem" />
        <button type="submit">Cadastra</button>
      </form>
    </div>
  );
}
