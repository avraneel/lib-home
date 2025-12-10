"use strict";

const myLibrary = [];

const button = document.querySelector(".add");
const addBookModal = document.querySelector(".add-book-modal");
const bookForm = document.querySelector(".book-form");
const closeButton = document.querySelector(".close-button");

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
})

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  const book = new Book();
  myLibrary.push(book);
}

function displayLoop() {
  for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}