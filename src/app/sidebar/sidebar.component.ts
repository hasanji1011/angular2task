import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from './sidebar-menu.service';


import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[SidebarMenuService]
})
export class SidebarComponent implements OnInit {
  highlightedDiv: number;
 user={
   name:""
 };
 menuObject:any;
  constructor(private sideMenu:SidebarMenuService) {
    this.user.name = "Muzaffer Hassan"
     this.getMenu();    
   }
   getMenu(){
      this.sideMenu.getMenu().subscribe(res=>{
        this.menuObject = res.menu;
        console.log(this.menuObject)
      },
      error => console.log(error)
      )

   }
   slideMenu(e){
    
   }
  ngOnInit() {
  }
  toggleHighlight(newValue: number) {
    if (this.highlightedDiv === newValue) {
      this.highlightedDiv = 0;
    }
    else {
      this.highlightedDiv = newValue;
    }
  }

}
