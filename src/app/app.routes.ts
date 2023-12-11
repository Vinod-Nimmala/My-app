import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructureldirectivesComponent } from './structureldirectives/structureldirectives.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    //General routing path
    {path: 'login',component:LoginComponent},

    //Child  routing path 
    {path:'dashboard', component:DashboardComponent, children:[
        {path: 'structureldirectives', component:StructureldirectivesComponent},
        {path: 'login', component:LoginComponent}
    ]},

    //Empty routing path 
    {path: '',component:LoginComponent},

    //Wild routing path
    {path: '**', component:PagenotfoundComponent}
];
