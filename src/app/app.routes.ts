import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ProjectDashboard } from './pages/project-dashboard/project-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'dashboard', component: ProjectDashboard },
  { path: '**', redirectTo: 'home' },
];
