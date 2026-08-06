import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { TreeView } from '../../components/tree-view/tree-view';

@Component({
  selector: 'app-project-dashboard',
  imports: [CommonModule, TreeView],
  templateUrl: './project-dashboard.html',
  styleUrl: './project-dashboard.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectDashboard implements OnInit {
  isLeftPanelOpen = true;
   public activeTabId = signal<string>('tab-1');

  toggleLeftPanel() {
    this.isLeftPanelOpen = !this.isLeftPanelOpen;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const contents = Array.from(
      document.querySelectorAll(
        '.frontend-kit-example_content',
      ),
    ) as HTMLDivElement[];
    const tabs = document.querySelector('.a-tab-navigation');

    if (tabs) {
      //const component = tabs as unknown as EventTarget;

      tabs.addEventListener('selected', (id) => {
        contents.forEach((content) => {
          if (content.dataset?.['frokContentIdentifier'] === id?.toString()) {
            /* eslint-disable-next-line no-param-reassign */
            content.style.display = 'block';
          } else {
            /* eslint-disable-next-line no-param-reassign */
            content.style.display = 'none';
          }
        });
      });
    }
  }

  public onTabSelected(event: Event): void {
    // Web Components emit standard CustomEvents. 
    // The selected tab ID is usually found in event.detail
    const customEvent = event as CustomEvent;
    console.log('Tab selected:', customEvent.detail);
    //this.activeTabId.set(customEvent.detail);
  }
}
