import { Component, OnInit, Input,EventEmitter,Output,trigger, state, style, transition, animate } from '@angular/core';
import {navBarItems} from './navbar.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('Toggle', [
      state('in', style({
        'padding-left': '270px'
        // transform: 'translateX(270px)',
      })),
      state('out', style({
        'padding-left': '0'
        // transform: 'translateX(0)',
      })),
      transition('in => out', animate('700ms ease-in-out')),
      transition('out => in', animate('700ms ease-in-out'))
    ]),
    
  ]
  
})
export class HeaderComponent implements OnInit {
 sideBarClosed = false;
 @Output() closeSideBarClick = new EventEmitter<boolean>();
 state:string = 'out';
 navBarItem:navBarItems;


  constructor() { }

  ngOnInit() {
this.navBarItem = {
  image: 'assets/img/profile.png',
  notifications: 3,
}
  

  }
 toggleSideBar(){
    this.closeSideBarClick.emit();
    this.sideBarClosed = true;
    this.state == 'in' ?  this.state = 'out' :  this.state ='in';
  }

}
