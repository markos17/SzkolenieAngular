import { Directive, HostBinding, Input } from '@angular/core';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmarks.models';

@Directive({
  selector: '[tmIsBookmarked]'
})
export class IsBookmarkedDirective {
// tslint:disable-next-line:no-input-rename
@Input('tmIsBookmarked') item: Bookmark;

  constructor(private bs: BookmarksService) {
    console.log('Hello from directive');
  }

@HostBinding('class.bookmarked')
// isBookmarked = false;
get isBookmarked() {
  return this.bs.has(this.item.id);
}

}
