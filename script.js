"use strict";

// Dom Elements
const button = document.querySelector(".add-button");
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

// Constructor for Book
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
  addBookToLibrary("Robinson Crusoe", "Danie Defoe", "Not Read");
  addBookToLibrary("Nine Billion names of God", "Isaac Asimov", "Not Read");
  addBookToLibrary("The Martian Chronicles", "Ray Bradbury", "Not Read");
}

// function to create the DOM element for a book
function createDom(book) {
  const bookEntry = document.createElement("div");
  bookEntry.classList.toggle("book-entry");
  const bookTitle = document.createElement("p");
  bookTitle.textContent = `Title: ${book.title}`;
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Author: ${book.author}`;
  const bookStatus = document.createElement("p");
  bookStatus.textContent = `Status: ${book.status}`;
  const bookCover = new Image();
  bookCover.src = `https://picsum.photos/200/300?random=1`;
  bookCover.alt = "Frankenstein";

  // Appending children
  bookEntry.appendChild(bookCover);
  bookEntry.appendChild(bookTitle);
  bookEntry.appendChild(bookAuthor);
  bookEntry.appendChild(bookStatus);

  return bookEntry;
}

function displayLoop() {
  addSomeBooks();
  const shelfBooks = document.querySelector(".shelf-books");
  for (let i = 0; i < myLibrary.length; i++) {
    const bookEntry = createDom(myLibrary[i]);
    console.log(myLibrary[i]);
    shelfBooks.appendChild(bookEntry);
  }
}

displayLoop();
