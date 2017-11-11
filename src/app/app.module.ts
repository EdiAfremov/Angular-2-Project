import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatSidenavModule,MatIconModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TasksComponent } from './main/tasks/tasks.component';
import { MessagesComponent } from './main/messages/messages.component';
import { ActivityComponent } from './main/activity/activity.component';
import { NavItemComponent } from './main/nav-item/nav-item.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TasksComponent,
    MessagesComponent,
    ActivityComponent,
    NavItemComponent,


  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
