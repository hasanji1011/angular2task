import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  navOpen:Boolean = true;
  toggleNav(data){
    this.navOpen = !(this.navOpen);
  }
}
