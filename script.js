"use strict";

const myLibrary = [];

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