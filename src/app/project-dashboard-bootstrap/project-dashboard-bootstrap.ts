import { Component } from '@angular/core';
import { TreeView } from '../components/tree-view/tree-view';

@Component({
  selector: 'app-project-dashboard-bootstrap',
  imports: [TreeView],
  templateUrl: './project-dashboard-bootstrap.html',
  styleUrl: './project-dashboard-bootstrap.scss',
})
export class ProjectDashboardBootstrap {
  isLeftPanelOpen = true;
  toggleLeftPanel() {
    this.isLeftPanelOpen = !this.isLeftPanelOpen;
  }
}
