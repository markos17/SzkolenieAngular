import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http/';
import { PosterComponent } from './poster/poster.component';
import { TvMazeService } from './tv-maze.service';
import { FormsModule } from '@angular/forms';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BookmarksModule
  ],
  providers: [
    TvMazeService,

  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent]
})
export class TvModule { }
