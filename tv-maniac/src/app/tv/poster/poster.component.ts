import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';
import { Show } from '../tv.models';
import {get} from 'lodash';


@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PosterComponent implements OnChanges {
  @Input() show: Show;
  @Input() size = 'lg';
  posterUrl: string;
  private placeholder = 'http://www.placecage.com/c/200/300';

  constructor() {

  }

  ngOnChanges() {
      const sizesDict = {
        lg: 'original',
        md: 'medium'
      };
    const sizeKey = sizesDict[this.size];
    // this.posterUrl = this.show.image[sizeKey];
    this.posterUrl = get(this.show, ['image', sizeKey], this.placeholder);
  }
}
