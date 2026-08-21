import { Component } from '@angular/core';
import { TreeView } from '../components/tree-view/tree-view';
import { TreeView2 } from '../components/tree-view-2/tree-view-2';
import { AddProduct } from '../components/add-product/add-product';
import { LoadingIndicatorService } from '../components/loading-indicator/loading-indicator.service';

@Component({
  selector: 'app-project-dashboard-bootstrap',
  standalone: true,
  imports: [TreeView, TreeView2, AddProduct],
  templateUrl: './project-dashboard-bootstrap.html',
  styleUrl: './project-dashboard-bootstrap.scss',
})
export class ProjectDashboardBootstrap {
  isLeftPanelOpen = true;

  constructor(private loadingIndicatorService: LoadingIndicatorService) {}
  toggleLeftPanel() {
    this.isLeftPanelOpen = !this.isLeftPanelOpen;
  }

  showLoadingIndicator() {
    this.loadingIndicatorService.show();
    setTimeout(() => {
      this.loadingIndicatorService.hide();
    }, 5000);
  }

  showLoadingIndicator2() {
    this.loadingIndicatorService.show2();
    setTimeout(() => {
      this.loadingIndicatorService.hide();
    }, 5000);
  }
}
