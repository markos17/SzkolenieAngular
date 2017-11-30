import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show, ShowResponse } from '../tv.models';
import 'rxjs/add/operator/map';
import { TvMazeService } from '../tv-maze.service';
import { BookmarksService } from '../../bookmarks/bookmarks.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
shows: Show[] = [];
query = 'flash';
searchForm: FormGroup;

constructor(private tv: TvMazeService,
            private bs: BookmarksService,
            private fb: FormBuilder) {
  // this.search('flash');

const queryControl = this.fb.control('flash');
this.searchForm = this.fb.group({
  query: queryControl
});

// na starcie przypisanie wartości
// // this.search(queryControl.value);
// // w f12 console pojawia się nowy wpis po kolejnej literce, jak ajax
// this.searchForm.valueChanges.subscribe(c => console.log(c));

this.search(this.searchForm.controls.query.value);
this.searchForm.valueChanges.subscribe(c => console.log(c));


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
