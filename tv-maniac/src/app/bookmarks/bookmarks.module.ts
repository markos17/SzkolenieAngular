import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksService } from './bookmarks.service';
import { BookmarkAddComponent } from './bookmark-add/bookmark-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BookmarksService
  ],
  declarations: [BookmarkAddComponent]
})
export class BookmarksModule { }
