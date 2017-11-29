import { Injectable } from '@angular/core';
import { Bookmark, BookmarkId } from './bookmarks.models';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookmarksService {
  private items: Bookmark[] = [];

  private readonly baseUrl = 'http://localhost:3000/bookmarks';

  constructor(private http: HttpClient) {
    this.http.get<Bookmark[]>(this.baseUrl)
    .subscribe(items => this.items = items);
  }

  getAll(): Bookmark[] {
    return [...this.items];
  }

  add(item: Bookmark): void {
    // this.items.push(item);
    this.http.post(this.baseUrl, item)
    .subscribe(() => this.items = [... this.items, item]);
   // this.items = [... this.items, item];
  }

  /* ponizej zamiast subscribe, uzylismy promise
  remove(id: BookmarkId): void {
    this.http.delete(`${this.baseUrl}/${id}`)  // .toPromise() zamiast subscribe .then()
    .subscribe(() => this.items = this.items.filter(item => item.id !== id));
  //  this.items = this.items.filter(item => item.id !== id);
  }
*/


async remove(id: BookmarkId): Promise<void> {
  try {
   await this.http.delete(`${this.baseUrl}/${id}`).toPromise();
    this.items = this.items.filter(item => item.id !== id);
  } catch (err) {
    console.error(err);
  }
}

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
