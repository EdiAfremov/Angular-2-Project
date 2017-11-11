import { message } from './messages.model';

export class messagesData {
    notification: number =  2;
  messages: message[] = [
    new message("Nina Jones"," 5 minutes ","Hey You! It’s me again :-) I attached (...)",true ,"../../assets/img/nina.png"),
    new message("Nina Jones"," About 20 hours "," Hey! I attached some new PSD fil (...)",true ,"../../assets/img/nina.png"),
    new message("James Smith"," 2 days ","Good morning, you are fired! ",false ,"../../assets/img/james.png"),
    new message("Nina Jones"," About 2 weeks ","Hello! Could You bring me coffee",false ,"../../assets/img/nina.png"),
  ];


}