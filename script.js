"use strict";

const myLibrary = [];

const button = document.querySelector(".add");
const addModal = document.querySelector(".add-modal");

button.addEventListener("click", displayForm);

function displayForm() {
  console.log("You clicked me!");
  addModal.showModal();
}


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