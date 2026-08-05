import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ProjectDashboard } from './pages/project-dashboard/project-dashboard';
import { ProjectDashboardBootstrap } from './project-dashboard-bootstrap/project-dashboard-bootstrap';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'dashboard', component: ProjectDashboard },
  { path: 'dashboard2', component: ProjectDashboardBootstrap },
  { path: '**', redirectTo: 'home' },
];
