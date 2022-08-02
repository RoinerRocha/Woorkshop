function showListOfBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    const table = document.getElementById('books_table');

    if (books) {
      let rows = "";
      books.forEach((book, index) => {
        let row = `<tr>`;
        row += `<td>${book.id}</td>`;
        row += `<td>${book.name}</td>`;
        row += `<td> <a onclick="editBook(${book.id})" class="link edit">Edit</a>  |  <a  onclick="deleteBook(${book.id});" class="link delete">Delete</a>  </td>`;
        row += `<td>${book.author}</td>`;
        rows += row + "</tr>";
      });
      table.innerHTML = rows;
    }

  }
  showListOfBooks();