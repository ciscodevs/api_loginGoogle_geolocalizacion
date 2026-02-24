import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Principal } from './components/principal/principal';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'principal',
        component: Principal
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
