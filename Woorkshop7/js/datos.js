function addBook(){
    const bookName = $('#title').val();
    const bookAuthor=$('#authors-list option:selected').text();

    //insert to a database
    let booksDb = JSON.parse(localStorage.getItem('books'));
    if(!booksDb) {
      booksDb = [];
    }
    const book = {
      name: bookName,
      id: booksDb.length + 1,
      author: bookAuthor
    }
    booksDb.push(book);
    localStorage.setItem('books', JSON.stringify(booksDb));
    // //reload the book list
    // showListOfBooks();
    console.log(JSON.parse(localStorage.getItem('books')));
    window.location.href = 'books.html';
  }

  function addAuthor(){
    const authorName = $('#author').val();

    //insert to a database
    let authorDb = JSON.parse(localStorage.getItem('author'));
    if(!authorDb) {
      authorDb = [];
    }
    const author = {
      name: authorName,
      id: authorDb.length + 1
    }
    authorDb.push(author);
    localStorage.setItem('author', JSON.stringify(authorDb));
    // //reload the book list
    // showListOfBooks();
    console.log(JSON.parse(localStorage.getItem('author')));
    window.location.href = 'books.html';
  }

  function loadAuthors(){
    // read authors from the database
    const authors = JSON.parse(localStorage.getItem('author'));

    if(authors) {
      let options = "";
      authors.forEach((author) => {
        options += `<option value="${author.id}">${author.name}</option>`;
      })
      // renders the select authors-list with the authors found
      document.getElementById('authors-list').innerHTML = options;
    }
  }

  $('#add-book-button').bind('click', function(){
    addBook();
  });
  $('#add-author-button').bind('click', function(){
    addAuthor();
  });
  loadAuthors();