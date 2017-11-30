import { Directive, HostBinding, Input, HostListener } from '@angular/core';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmarks.models';

@Directive({
  selector: '[tmIsBookmarked]'
})
export class IsBookmarkedDirective {
// tslint:disable-next-line:no-input-rename
@Input('tmIsBookmarked') item: Bookmark;

@HostBinding('class.opaque')
isOpaque= false;

  constructor(private bs: BookmarksService) {
    console.log('Hello from directive');
  }

@HostListener('click', ['$event.target'])
toggleOpaque(target: HTMLElement) {
  if (target.tagName === 'IMG') {
  this.isOpaque = !this.isOpaque;
}
}

@HostBinding('class.bookmarked')
// isBookmarked = false;
get isBookmarked() {
  return this.bs.has(this.item.id);
}

}
