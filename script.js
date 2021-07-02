let myLibrary = [];
let container = document.getElementById('container');
let bookList = document.getElementById('bookList');
const addBook = document.getElementById('addBook');


addBook.addEventListener('click', createForm)

function Books(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages,' + ' ' + this.read;
  }
}

function addBookToLibrary() {

  // const newBook = new Books();
  const newBook = new Books(document.getElementById('titleInput').value, document.getElementById('authorInput').value, document.getElementById('pageInput').value, document.getElementById('readInput').value);
  myLibrary.push(newBook);
}

function refreshBookList() {
  addBookToLibrary();

  bookList.innerHTML = '';
  container.removeChild(document.getElementById('form'));

  for (let i = 0; i < myLibrary.length; i++) {
    let genText = document.createElement('p');
    genText.innerHTML = myLibrary[i].info();
    genText.style.color = 'rgb(175, 175, 175)';
    bookList.appendChild(genText);
  }

  // console.log(document.getElementById('titleInput').value, 'by', document.getElementById('authorInput').value, ',', document.getElementById('pageInput').value, 'pages,', document.getElementById('readInput').value);
}

function createForm() {
  let createForm = document.createElement('FORM');
  createForm.setAttribute("id", 'form');
  container.appendChild(createForm);
  // genText.innerHTML = 'Store your book here.'
  // document.getElementById('form').appendChild(genText);
  // document.getElementById('form').style.transition = 0.2;
  let titleInputCreate = document.createElement("INPUT");
  titleInputCreate.setAttribute("input", "text");
  titleInputCreate.setAttribute("id", "titleInput");
  titleInputCreate.setAttribute("class", "input")
  titleInputCreate.setAttribute("placeholder", "Book title");
  document.getElementById("form").appendChild(titleInputCreate);
  let authorInputCreate = document.createElement("INPUT");
  authorInputCreate.setAttribute("input", "text");
  authorInputCreate.setAttribute("id", "authorInput");
  authorInputCreate.setAttribute("class", "input")
  authorInputCreate.setAttribute("placeholder", "Author");
  document.getElementById("form").appendChild(authorInputCreate);
  let pageInputCreate = document.createElement("INPUT");
  pageInputCreate.setAttribute("input", "text");
  pageInputCreate.setAttribute("class", "input")
  pageInputCreate.setAttribute("id", "pageInput");
  pageInputCreate.setAttribute("placeholder", "Total pages");
  document.getElementById("form").appendChild(pageInputCreate);
  let readInputCreate = document.createElement("INPUT");
  readInputCreate.setAttribute("input", "text");
  readInputCreate.setAttribute("id", "readInput");
  readInputCreate.setAttribute("class", "input")
  readInputCreate.setAttribute("placeholder", "Finished / Not yet");
  document.getElementById("form").appendChild(readInputCreate);
  let doneButtonCreate = document.createElement("button");
  doneButtonCreate.setAttribute("class", "button");
  doneButtonCreate.setAttribute("id", "finishAddBook");
  doneButtonCreate.textContent = 'Done';
  document.getElementById("form").appendChild(doneButtonCreate);
  const finishAddBook = document.getElementById('finishAddBook');
  finishAddBook.addEventListener('click', refreshBookList)
}