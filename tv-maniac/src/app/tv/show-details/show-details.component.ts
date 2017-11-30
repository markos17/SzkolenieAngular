import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowDetailsParams } from '../../app-routing.module';
import { TvMazeService } from '../tv-maze.service';
import { ShowDetails } from '../tv.models';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
show: ShowDetails;
episodeLength = 2;

constructor(private route: ActivatedRoute) {
  // this.route.data.subscribe(({show}) => this.show = show);
  this.show = this.route.snapshot.data.show;
  this.episodeLength = this.show._embedded.episodes.some(({number}) => number > 99) ? 3 : 2;
  console.log(this.route.snapshot.data.roles);
}

/*
  constructor(private route: ActivatedRoute,
              private tv: TvMazeService) {
    const {id} = this.route.snapshot.params as ShowDetailsParams; // destructering
    // const id1 = (this.route.snapshot.params as ShowDetailsParams).id;  analogicznie j.w.
    this.route.params.subscribe(p => console.log(p));

    this.tv.getShow(id)
    .subscribe(show => this.show = show);
   }
*/
  ngOnInit() {
  }

}
