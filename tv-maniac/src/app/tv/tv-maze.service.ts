import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Show, ShowResponse, ShowDetails } from './tv.models';

 @Injectable()
export class TvMazeService {
private readonly baseUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  searchShow(query: string): Observable<Show[]> {
    const url = `${this.baseUrl}/search/shows?q=${query}`;

    return this.http.get<ShowResponse[]>(url) // fetch(url)
    .map(response => response.map(({show}) => show));
  }

  getShow(id: string): Observable<ShowDetails> {
    const url = `${this.baseUrl}/shows/${id}?embed=episodes`;
    return this.http.get<ShowDetails>(url);
  }
}
