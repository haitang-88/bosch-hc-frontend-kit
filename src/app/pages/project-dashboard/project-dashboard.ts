import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-dashboard',
  imports: [CommonModule],
  templateUrl: './project-dashboard.html',
  styleUrl: './project-dashboard.scss',
})
export class ProjectDashboard {
  isLeftPanelOpen = false;
  isRightPanelOpen = false;

  toggleLeftPanel() {
    this.isLeftPanelOpen = !this.isLeftPanelOpen;
  }

  toggleRightPanel() {
    this.isRightPanelOpen = !this.isRightPanelOpen;
  }
}
