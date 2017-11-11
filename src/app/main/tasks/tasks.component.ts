import { Component, OnInit } from '@angular/core';
import { tasks } from './tasks.model';
import { tasksData } from './tasksData.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../main.component.scss'],
  providers:[tasksData],
})
export class TasksComponent implements OnInit {

  notifications: { blueNotification: number, redNotification: number };
  tasks: tasks[];
  constructor(private tasksList:tasksData) {

  }

  ngOnInit() {
    this.notifications = this.tasksList.notifications;
    this.tasks = this.tasksList.tasks;
  }

}
