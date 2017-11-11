import { tasks } from './tasks.model';

export class tasksData {
    notifications: { blueNotification: number, redNotification: number } = { blueNotification: 5, redNotification: 2 };
    
      tasks: tasks[] = [
        new tasks(" New website for Symu.co", "N", true, 5),
        new tasks("Free business PSD Template", "F", true, 2),
        new tasks("New logo for JCD.pl", "N", false, 5),
        new tasks("Free Icons Set vol. 3", "F", false, 10)
      ];



}