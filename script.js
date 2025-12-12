"use strict";

// Dom Elements
const button = document.querySelector(".add");
const addBookModal = document.querySelector(".add-book-modal");
const bookForm = document.querySelector(".book-form");
const closeButton = document.querySelector(".close-button");

const myLibrary = [];

function displayForm() {
  console.log("You clicked me!");
  addBookModal.showModal();
}

button.addEventListener("click", displayForm);

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

closeButton.addEventListener("click", () => {
  addBookModal.close();
});

function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, status) {
  const book = new Book(title, author, status);
  myLibrary.push(book);
}

function addSomeBooks() {
  addBookToLibrary("Frankenstein", "Mary Shelly", "Not Read");
  addBookToLibrary("The Time Machine", "H.G. Wells", "Not Read");
}

function displayLoop() {
  addSomeBooks();
  const shelfBooks = document.querySelector(".shelf-books");
  for (let i = 0; i < myLibrary.length; i++) {
    let bookEntry = document.createElement("div");
    bookEntry.classList.toggle("book-entry");
    const bookTitle = document.createTextNode(`Title: ${myLibrary[i].title}`);
    const bookAuthor = document.createTextNode(
      `Author: ${myLibrary[i].author}`,
    );
    const bookStatus = document.createTextNode(
      `Status: ${myLibrary[i].status}`,
    );
    let bookCover = new Image();
    bookEntry.appendChild(bookTitle);
    bookEntry.appendChild(bookAuthor);
    console.log(myLibrary[i]);
    shelfBooks.appendChild(bookEntry);
  }
}

displayLoop();
