import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {
  totalUser;
  averageTime;
  totalMales;
  totalFemales;
  totalCollections;
  totalConnections;
  constructor() {
    this.totalUser = 2500;
    this.averageTime = 123.50;
    this.totalMales = 2500;
    this.totalFemales = 4567;
    this.totalCollections = 2315;
    this.totalConnections = 7325;
   }

  ngOnInit() {
  }

}
