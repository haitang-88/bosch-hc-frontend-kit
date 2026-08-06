import { Component, inject, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
// Interface for a tree node
export interface TreeNode {
  name: string;
  icon: string;
  children?: TreeNode[];
  expanded?: boolean;
}

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule, NgbModule, FormsModule],
  templateUrl: './tree-view.html',
  styleUrl: './tree-view.scss',
})
export class TreeView {
  private modalService = inject(NgbModal);
  // modal
  @ViewChild('modalCreateGroup', { static: true }) modalCreateGroupTemplate:
    TemplateRef<any> | undefined;

  newGroupName: string = '';
  // Data for the tree view
  readonly icon_level_1: string = 'bi-clipboard';
  readonly icon_level_2: string = 'bi-file-text';
  readonly icon_level_3: string = 'bi-diagram-3';

  nodes: TreeNode[] = [
    {
      name: 'K26ProdAug4',
      icon: this.icon_level_1,
      expanded: true,
      children: [
        {
          name: 'Estimate 3',
          icon: this.icon_level_2,
          expanded: true,
          children: [
            { name: 'Est3 - Group1', icon: this.icon_level_3, expanded: false, children: []},
            { name: 'Est3 - Group2', icon: this.icon_level_3, expanded: false, children: [] },
          ],
        },
      ],
    },
    {
      name: 'Estimate 2',
      icon: this.icon_level_1,
      expanded: true,
      children: [
        { name: 'Est2 - Group1', icon: this.icon_level_2, expanded: false, children: [] },
        { name: 'Est2 - Group2', icon: this.icon_level_2, expanded: false, children: [] },
      ],
    },
  ];

  

  selectedNode: TreeNode | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  // Toggles the expanded/collapsed state of a node
  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  // Sets the currently selected node
  selectNode(node: TreeNode, event: MouseEvent): void {
    event.stopPropagation(); // Prevent parent nodes from being selected
    this.selectedNode = node;
  }

  // Handles context menu actions
  onContextMenuAction(action: string, node: TreeNode): void {
    if (action === 'Add Group') {
      this.openCreateGroupModal();
    } else alert(`Action: ${action} on Node: ${node.name}`);
    // Implement the actual logic for each action here
    // For example, for 'Rename', you could open a modal.
  }

  //handle open modal
  openCreateGroupModal() {
    if (this.modalCreateGroupTemplate) {
      this.newGroupName = ''; // Reset the input field
      this.modalService
        .open(this.modalCreateGroupTemplate, { ariaLabelledBy: 'modal-basic-title' })
        .result.then(
          (result) => {
            this.createChildGroup(result);
          },
          (reason) => {
            //this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
          },
        );
    }
  }

  createChildGroup(result: any) {
    if (this.selectedNode) {
      const newGroup: TreeNode = {
        name: result,
        icon: this.getNodeIcon(this.selectedNode),
        children: [],
        expanded: false,
      };
      this.selectedNode.expanded = true; // Ensure the parent node is expanded to show the new child
      this.selectedNode.children?.push(newGroup);
    }
    this.cdr.detectChanges(); // Manually trigger change detection to update the view
  }

  getNodeIcon(node: TreeNode): string {
    switch (node.icon) {
      case this.icon_level_1:
        return this.icon_level_2;
      case this.icon_level_2:
        return this.icon_level_3;
      case this.icon_level_3:
        return this.icon_level_3; // No further level, keep the same icon
      default:
        return '';
    }
  }
}
