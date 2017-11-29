import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show, ShowResponse } from '../tv.models';
import 'rxjs/add/operator/map';
import { TvMazeService } from '../tv-maze.service';
import { BookmarksService } from '../../bookmarks/bookmarks.service';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
shows: Show[] = [];
query = 'flash';

constructor(private tv: TvMazeService,
            private bs: BookmarksService) {
  this.search('flash');
}

search(query: string) {
  this.tv.searchShow(query)
  .subscribe(shows => this.shows = shows);
}

saveBookmark(show: Show): void {
  this.bs.add(show);
}

isBookmarked(show: Show): boolean {
    return this.bs.has(show.id);
}

get bookmark(): Show[] {
  return this.bs.getAll() as Show[];
}

/*
  constructor(http: HttpClient, tv: TvMazeService) {
  //console.log(tv.baseUrl);
   przeniesione do service tv-maze
    const url = 'https://api.tvmaze.com/search/shows?q=batman';
    http.get<ShowResponse[]>(url) // fetch(url)
     // .subscribe(r => console.table(r));
    // .map(response => response.map(data => data.show))
     .map(response => response.map(({show}) => show))
    tv.searchShow('flash')
     .subscribe(shows => this.shows = shows);
  }
*/
}
