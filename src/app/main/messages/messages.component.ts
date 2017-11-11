import { Component, OnInit } from '@angular/core';
import { message } from './messages.model';
import { messagesData } from './messagesData.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['../main.component.scss'],
  providers: [messagesData],
})
export class MessagesComponent implements OnInit {
  notification: number;
  messages:message[];

  constructor(private messagesList:messagesData ) { }

  ngOnInit() {
    this.notification = this.messagesList.notification;
    this.messages = this.messagesList.messages;
  }

}
