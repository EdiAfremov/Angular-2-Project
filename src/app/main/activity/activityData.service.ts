import { activity } from './activity.model';
export class dataService {
    notification : number = 10;
    activities:activity[] = [
      new activity("Nina Jones", " added a new project ", "Free UI Kit"," just now","assets/img/nina.png"),
      new activity("James Smith", " commented project ", "Free PSD Template"," 40 minutes ago","assets/img/james.png"),
      new activity("Alex Clooney", " completed task ", "Symu Website"," 1 hour ago","assets/img/alexC.png"),
      new activity("Alexandra Spears", " added a new project", " Free PSD (...)"," 3 hours ago","assets/img/alexsandra.png")
    ];

}