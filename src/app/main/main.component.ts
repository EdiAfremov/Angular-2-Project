import { Component, OnInit, EventEmitter,Output,Input,trigger, state, style, transition, animate } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('Toggle', [
      state('in', style({
        // transform: 'translate3d(0, 0, 0)',
        transform: 'translateX(0)'
      })),
      state('out', style({
        // transform: 'translate3d(100%,0,0)',
        transform: 'translateX(-100%)',
        'width': '0'
      })),
      transition('in => out', animate('700ms ease-in-out')),
      transition('out => in', animate('700ms ease-in-out'))
    ]),
    trigger('containerState', [
      state('in', style({
        'margin-left':'270px'
      })),
      state('out', style({
        'margin-left':'0'

      })),
      transition('in => out', animate('700ms ease-in-out')),
      transition('out => in', animate('700ms ease-in-out'))
    ]),
    
  ]

})
export class MainComponent implements OnInit {
  user: string = " John";
  sideBarClosed= true;
  state:string = 'out';
  containerState:string = 'out';
  constructor() { }

  ngOnInit() {
 
  }
 
  toggleMenu() {
    this.sideBarClosed = false;
    this.state == 'in' ?  this.state = 'out' :  this.state ='in';
    this.containerState == 'in' ?  this.containerState = 'out' :  this.containerState ='in';
    // this.sideBarClosed = true;
    console.log("sideBarClosed: "+this.sideBarClosed);
    
  }


}
