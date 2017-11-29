import { Component } from '@angular/core';

@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sm';

  clickHandler(event: MouseEvent) {
    console.log('CLICK!');
    this.title = this.title + '...' + event.clientX;
  }
}


