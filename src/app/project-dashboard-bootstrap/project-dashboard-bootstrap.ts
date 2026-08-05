import { Component } from '@angular/core';

@Component({
  selector: 'app-project-dashboard-bootstrap',
  imports: [],
  templateUrl: './project-dashboard-bootstrap.html',
  styleUrl: './project-dashboard-bootstrap.scss',
})
export class ProjectDashboardBootstrap {
  isLeftPanelOpen = true;
  toggleLeftPanel() {
    this.isLeftPanelOpen = !this.isLeftPanelOpen;
  }
}
