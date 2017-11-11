import { Component, OnInit } from '@angular/core';
import { navItems } from './nav.model';
import { navData } from './navData.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['../main.component.scss'],
  providers:[navData],
})
export class NavItemComponent implements OnInit {

logo:navItems;
items:navItems[];
  constructor(private itemsList:navData) { 
    
  }

  ngOnInit() {
    this.logo = this.itemsList.logo;
    this.items = this.itemsList.items;
  }

}
