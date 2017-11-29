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

  remove(id: BookmarkId): void {
    this.http.delete(`${this.baseUrl}/${id}`)
    .subscribe(() => this.items = this.items.filter(item => item.id !== id));
  //  this.items = this.items.filter(item => item.id !== id);
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
