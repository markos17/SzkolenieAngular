export type BookId = number | string;

export interface Book {
  id: BookId;
  title: string;
}

export class LibraryBook implements Book {
  id: BookId;
  //title: string;
  constructor(public title: string) {
    this.title = "title";
  }
}
