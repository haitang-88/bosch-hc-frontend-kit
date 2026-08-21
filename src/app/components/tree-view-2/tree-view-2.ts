import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IgxTreeModule,
  IgxDragDropModule,
  IgxButtonModule,
  IgxDropDownModule,
  IgxRippleModule,
  IgxDropDownComponent,
  IgxIconComponent,
  IgxIconService,
} from 'igniteui-angular';

import { IgxTreeComponent } from 'igniteui-angular/tree';
import { TreeNode, TreeViewController } from './tree-view-2.models';

export type { TreeNode };

@Component({
  selector: 'app-tree-view-new',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    CommonModule,
    IgxTreeModule,
    IgxDragDropModule,
    IgxButtonModule,
    IgxDropDownModule,
    IgxRippleModule,
    IgxTreeComponent,
    IgxIconComponent,
  ],
  templateUrl: './tree-view-2.html',
  styleUrls: ['./tree-view-2.scss'],
})
export class TreeView2 implements TreeViewController, OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly renderer = inject(Renderer2);
  @ViewChild('actionMenu', { read: IgxDropDownComponent })
  public actionMenu!: IgxDropDownComponent;

  public isValidDropTarget: boolean = false;
  public ghostMessage: string = '';

  // Selected State Tracking
  public selectedNode: TreeNode | null = null;
  public draggedOverNode: TreeNode | null = null;
  private currentMenuNode: TreeNode | null = null;

  // Hierarchical Data Structure Mock
  public treeData: TreeNode[] = [
    {
      id: '1',
      name: 'Root Node - Company Info',
      expanded: true,
      children: [
        {
          id: '1-1',
          name: 'Department Strategy',
          expanded: true,
          children: [
            { id: '1-1-1', name: 'Q1 Roadmap.docx', expanded: true, children:[] },
            { id: '1-1-2', name: 'Budget-2026.xlsx', expanded: true, children:[] },
          ],
        },
        {
          id: '1-2',
          name: 'Engineering Branch',
          expanded: true,
          children: [
            { id: '1-2-1', name: 'Frontend-Kit Guide', expanded: true, children:[] },
            { id: '1-2-2', name: 'ProxyConfigurations.md', expanded: true, children:[] },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Archive Assets',
      expanded: false,
      children: [{ id: '2-1', name: 'Old_Marketing_Collateral.pdf', expanded: true, children:[] }],
    },
  ];

  constructor(private readonly iconService: IgxIconService) {}

  ngOnInit(): void {
    // registers a 'material-symbols-outlined' class to be applied to all igx-icons with 'material-symbols' font-family
    this.iconService.setFamily('material-symbols', {
      className: 'material-symbols-outlined',
      type: 'liga',
    });
  }

  // 1. Selection Mechanism
  public selectNode(node: TreeNode, event: MouseEvent): void {
    // Prevent interfering with expand / collapse click triggers
    event.stopPropagation();
    this.selectedNode = node;
  }

  public onNodeActiveChanged(nodeComponent: any): void {
    if (nodeComponent?.data) {
      this.selectedNode = nodeComponent.data as TreeNode;
    }
  }

  // 2. Action Dropdown Controls
  public openActionMenu(event: MouseEvent, node: TreeNode): void {
    event.stopPropagation();
    event.preventDefault();
    this.currentMenuNode = node;

    // Open relative to the target element's viewport position
    this.actionMenu.open({
      closeOnOutsideClick: true,
      modal: false,
      target: event.currentTarget as HTMLElement,
    });
  }

  public onMenuItemSelected(event: any): void {
    const action = event.newSelection.value;
    if (!this.currentMenuNode) return;

    switch (action) {
      case 'add-child':
        this.addChildNode(this.currentMenuNode);
        break;
      case 'rename':
        this.renameNode(this.currentMenuNode);
        break;
      case 'delete':
        this.deleteNode(this.currentMenuNode);
        break;
    }

    // Reset active dropdown tracking
    this.currentMenuNode = null;
  }

  // 3. Drag and Drop Structural Implementations
  public onDragStart(event: any, node: TreeNode): void {
    if (node) {
      this.selectedNode = node;
    }
    // close the context menu if it's open
    const menuBtn = event.owner.element.nativeElement.querySelector('div.d-inline-block > button');
    const menuContext = event.owner.element.nativeElement.querySelector('div.d-inline-block > ul');
    if (menuBtn) {
      this.renderer.removeClass(menuBtn, 'show');
    }

    if (menuContext) {
      this.renderer.removeClass(menuContext, 'show');
    }
  }

  public onDragEnd(): void {
    this.draggedOverNode = null;
  }

  public onDragEnter(event: any, targetNode: TreeNode): void {
    const sourceNode = event.dragData as TreeNode;

    // Highlight drop targets, excluding itself and any nested children
    if (sourceNode.id !== targetNode.id && !this.isDescendantOf(sourceNode, targetNode)) {
      this.draggedOverNode = targetNode;
      this.renderer.addClass(event.owner.element.nativeElement, 'active');
      this.ghostMessage = `Move to "${targetNode.name}"`;
      this.isValidDropTarget = true;
    }
    else{
      this.isValidDropTarget = false;
    }
  }

  public onDragLeave(event: any): void {
    this.draggedOverNode = null;
    this.renderer.removeClass(event.owner.element.nativeElement, 'active');
    this.isValidDropTarget = false;
    this.ghostMessage = '';
  }

  public onNodeDropped(event: any, targetNode: TreeNode): void {
    event.cancel = true; // Prevent default absolute translation
    const sourceNode = event.dragData as TreeNode;

    if (!sourceNode || sourceNode.id === targetNode.id) return;

    // Cyclic Check: Make sure a parent branch cannot be dropped into its own child branch
    if (this.isDescendantOf(sourceNode, targetNode)) {
      console.warn('Invalid Drag and Drop: cannot move parent branch into its own descendants.');
      return;
    }

    // Execute safe structural shift on your underlying data models
    this.moveNodeInTree(sourceNode, targetNode);
    this.draggedOverNode = null;
  }

  // --- Recursive Helper Functions ---

  private isDescendantOf(parent: TreeNode, child: TreeNode): boolean {
    if (!parent.children || parent.children.length === 0) return false;

    for (const node of parent.children) {
      if (node.id === child.id) return true;
      if (this.isDescendantOf(node, child)) return true;
    }
    return false;
  }

  private moveNodeInTree(source: TreeNode, target: TreeNode): void {
    // 1. Remove node from its source parent
    this.findAndRemoveNode(this.treeData, source.id);

    // 2. Append node to target parent's children
    target.children ??= [];
    target.children.push(source);
    target.expanded = true;

    // Force immutable updates to trigger Angular rendering pipelines
    this.treeData = [...this.treeData];
  }

  private findAndRemoveNode(list: TreeNode[], id: string): boolean {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list.splice(i, 1);
        return true;
      }
      if (list[i].children) {
        const removed = this.findAndRemoveNode(list[i].children!, id);
        if (removed) return true;
      }
    }
    return false;
  }

  // --- Quick Actions Mock Implementations ---

  private addChildNode(parent: TreeNode): void {
    const newId = `${parent.id}-${(parent.children?.length || 0) + 1}`;
    const newChild: TreeNode = {
      id: newId,
      name: `New Child Node (${newId})`,
      expanded: false,
      children: [],
    };

    parent.children ??= [];
    parent.children.push(newChild);
    parent.expanded = true;
    this.treeData = [...this.treeData];
  }

  private renameNode(node: TreeNode): void {
    const originalLabel = node.name;
    const promptValue = prompt('Enter a new name for the node:', originalLabel);
    if (promptValue !== null && promptValue.trim() !== '') {
      node.name = promptValue.trim();
    }
  }

  private deleteNode(node: TreeNode): void {
    if (confirm(`Are you sure you want to delete "${node.name}"?`)) {
      this.findAndRemoveNode(this.treeData, node.id);
      this.treeData = [...this.treeData];
      if (this.selectedNode === node) {
        this.selectedNode = null;
      }
    }
  }

  // Handles context menu actions
  onContextMenuAction(action: string, node: TreeNode): void {
    if (action === 'Add Group') {
      //this.openCreateGroupModal();
    } else alert(`Action: ${action} on Node: ${node?.name}`);
    // Implement the actual logic for each action here
    // For example, for 'Rename', you could open a modal.
  }

  // Toggles the expanded/collapsed state of a node
  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  // update the view after a ghost is created to ensure the ghost message is displayed correctly
  public onGhostCreated(): void {
    this.cdr.detectChanges();
  }
}
