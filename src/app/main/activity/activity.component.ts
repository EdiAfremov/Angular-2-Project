import { Component, OnInit } from '@angular/core';
import { activity } from './activity.model';
import { dataService } from './activityData.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['../main.component.scss'],
  providers: [dataService],
})
export class ActivityComponent implements OnInit {
 notification: number;
 activities: activity[];

  constructor(private activitiesList:dataService ) { }

  ngOnInit() {
    this.activities = this.activitiesList.activities; 
    this.notification = this.activitiesList.notification;
  }

}
