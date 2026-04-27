import { Routes } from '@angular/router';
import { GamePage } from './components/game-page/game-page';
import { LeaderboardPage } from './components/leaderboard-page/leaderboard-page';
import { LoginPage } from './components/login-page/login-page';
import { RegisterPage } from './components/register-page/register-page';

export const routes: Routes = [
    {
        path: '',
        component: GamePage
    },
    {
        path: 'leaderboard',
        component: LeaderboardPage
    },
    {
        path:'login',
        component: LoginPage
    },
    {
        path: 'register',
        component: RegisterPage
    },
];
