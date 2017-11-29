import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from '../bookmarks.models';
import { BookmarksService } from '../bookmarks.service';

@Component({
  selector: 'tm-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.scss']
})
export class BookmarkRemoveComponent  {

@Input() item: Bookmark;
// item: Bookmark;

  constructor(private bs: BookmarksService) { }

  remove(): void {
    this.bs.remove(this.item.id);
  }

  has(): boolean {
      return this.bs.has(this.item.id);
  }
}
