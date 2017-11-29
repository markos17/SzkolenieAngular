import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { EventEmitter } from 'events';


@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@Input() owner = 'me';
@Output() timePass = new EventEmitter<number>();

  constructor() {
  setInterval(() => {
    this.timePass.emit(+new Date());
  }, 2000);
  }

  ngOnInit() {
  }


}
