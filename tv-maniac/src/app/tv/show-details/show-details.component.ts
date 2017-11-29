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

  constructor(private route: ActivatedRoute,
              private tv: TvMazeService) {
    const {id} = this.route.snapshot.params as ShowDetailsParams; // destructering
    // const id1 = (this.route.snapshot.params as ShowDetailsParams).id;  analogicznie j.w.
    this.route.params.subscribe(p => console.log(p));

    this.tv.getShow(id)
    .subscribe(show => this.show = show);
   }

  ngOnInit() {
  }

}
