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
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

displayLoop();
