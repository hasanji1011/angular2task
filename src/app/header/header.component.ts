import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navEvent = new EventEmitter<any>();
  constructor() { }
  
  ngOnInit() {
  }
  navClicked(){
    this.navEvent.emit('clicked');
    console.log('navClicked in child');
  }
}
