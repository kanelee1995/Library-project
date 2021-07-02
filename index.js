let myLibrary = [];
let container = document.getElementById('container');
let bookList = document.getElementById('bookList');
const addBook = document.getElementById('addBook');


addBook.addEventListener('click', createForm);

class Books {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false

    this.info = function () {
      return this.title + ' by ' + this.author + ' | ' + this.pages + ' pages |' + ' ' + this.read;
    }
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
    myLibrary[i]['data-number'] = `${i}`;

    let bookRow = document.createElement('div');
    bookRow.setAttribute('class', 'bookRow');
    bookRow.setAttribute('id', `bookRow#${i}`)
    bookList.appendChild(bookRow);

    let genText = document.createElement('p');
    genText.innerHTML = myLibrary[i].info();
    genText.setAttribute('id', `para#${i}`)
    genText.style.color = 'rgb(175, 175, 175)';
    bookRow.appendChild(genText);

    // Finished

    let createButton2 = document.createElement('button');
    createButton2.textContent = 'Finished';
    createButton2.setAttribute('id', `finishedButton#${i}`)
    createButton2.setAttribute('class', 'functionButton');
    bookRow.appendChild(createButton2);
    if (myLibrary[i]['finished']) {
      document.getElementById(`finishedButton#${i}`).textContent = 'Finished ✔️';
      document.getElementById(`finishedButton#${i}`).setAttribute('class', 'checked');
    }
    document.getElementById(`finishedButton#${i}`).addEventListener('click', function () {
      document.getElementById(`finishedButton#${i}`).textContent = 'Finished ✔️';
      document.getElementById(`finishedButton#${i}`).setAttribute('class', 'checked');
      myLibrary[i]['finished'] = true;
    })

    // Delete

    let createButton = document.createElement('button');
    createButton.textContent = 'Delete ➖';
    createButton.setAttribute('id', `button#${i}`)
    createButton.setAttribute('class', 'functionButton');
    bookRow.appendChild(createButton);
    document.getElementById(`button#${i}`).addEventListener('click', function () {  //button#0 will remove myLibirary[0]
      myLibrary.splice(i, 1);
      bookList.removeChild(document.getElementById(`bookRow#${i}`))
      bookRow.removeChild(document.getElementById(`para#${i}`));
      bookRow.removeChild(document.getElementById(`button#${i}`));
    })

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

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());