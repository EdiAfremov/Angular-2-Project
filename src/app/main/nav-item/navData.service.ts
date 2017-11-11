import { navItems } from './nav.model';

export class navData {
    logo:navItems =
        {    
        icon: 'assets/img/icons/logo.png', item: 'Merkury'
        };

     items: navItems[] =[
        {icon: 'assets/img/icons/home.png', item: 'Home'},
        {icon: 'assets/img/icons/workflow.png', item: 'Workflow'},
        {icon: 'assets/img/icons/stat.png', item: 'Statistic'},
        {icon: 'assets/img/icons/calendar.png', item: 'Calendar'},
        {icon: 'assets/img/icons/users.png', item: 'Users'}, 
        {icon: 'assets/img/icons/settings.png', item: 'Settings'}, 
        ]
}