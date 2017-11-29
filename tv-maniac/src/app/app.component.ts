import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResolveStart, ResolveEnd, NavigationError } from '@angular/router/';


@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sm';
  isLoading = false;

  // clickHandler(event: MouseEvent) {
  //   console.log('CLICK!');
  //   this.title = this.title + '...' + event.clientX;
  // }

  constructor(router: Router) {
      // router.events.subscribe(c => console.log(c));
    router.events.subscribe(event => {
      if (event instanceof ResolveStart) {
        this.isLoading = true;
      }
      // tslint:disable-next-line:one-line
      else if (event instanceof ResolveEnd || event instanceof NavigationError) {
        this.isLoading = false;
      }
    });
  }
}


