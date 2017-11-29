import { LibraryBook, Book, BookId } from "./library.models";

//let book = 'JS';
//book = 2;

//import (Book, Bookid,LibraryBook) from './library.models'

// type BookId = number | string;

// interface Book {
//   id: BookId;
//   title: string;
// }

function operateOnID(id: BookId) {
  if (typeof id == "number") {
    return id.toFixed(2);
  }
  return id.length;
}

// class LibraryBook implements Book {
//   id: BookId;
//   //title: string;
//   constructor(public title: string) {
//     this.title = "title";
//   }
// }

const book1 = { id: 1, title: "Programming in JS" };
const book2: Book = { id: 2, title: "TS in action" };
const book3 = new LibraryBook("Angular in practice");

let bookshelf: Book[] = [book1, book2];
bookshelf = adder(bookshelf, book3);

function adder(list: Book[], item: Book):Book[] {
  return [...list, item];
}

function adderGeneric<T>(list: T[], item: T):T[] {
  return [...list, item];
}