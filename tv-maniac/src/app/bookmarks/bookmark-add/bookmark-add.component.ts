import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from '../bookmarks.models';
import { BookmarksService } from '../bookmarks.service';

@Component({
  selector: 'tm-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent {
@Input() item: Bookmark;
// item: Bookmark;

  constructor(private bs: BookmarksService) { }

  add(): void {
    this.bs.add(this.item);
  }

  has(): boolean {
      return this.bs.has(this.item.id);
  }
}
