import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IgxTreeModule,
  IgxDragDropModule,
  IgxButtonModule,
  IgxDropDownModule,
  IgxRippleModule,
  IgxIconComponent,
  IgxIconService,
} from 'igniteui-angular';

import { IgxTreeComponent } from 'igniteui-angular/tree';
import { treeAction, TreeNode, TreeViewController } from './tree-view-2.models';

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

  public isValidDropTarget: boolean = false;
  public ghostMessage: string = '';
  public treeAction = treeAction; // Expose the action constants to the template

  // Selected State Tracking. this is used for drag and drop feature
  public selectedNode: TreeNode | null = null;
  public draggedOverNode: TreeNode | null = null;
  
  // Hierarchical Data Structure Mock
  public treeData: TreeNode[] = [
    {
      id: '1',
      parentId: null,
      name: 'Root Node - Company Info',
      expanded: true,
      children: [
        {
          id: '1-1',
          parentId: '1',
          name: 'Department Strategy',
          expanded: true,
          children: [
            { id: '1-1-1', parentId: '1-1', name: 'Q1 Roadmap.docx', expanded: true, children: [] },
            {
              id: '1-1-2',
              parentId: '1-1',
              name: 'Budget-2026.xlsx',
              expanded: true,
              children: [],
            },
          ],
        },
        {
          id: '1-2',
          parentId: '1',
          name: 'Engineering Branch',
          expanded: true,
          children: [
            {
              id: '1-2-1',
              parentId: '1-2',
              name: 'Frontend-Kit Guide',
              expanded: true,
              children: [],
            },
            {
              id: '1-2-2',
              parentId: '1-2',
              name: 'ProxyConfigurations.md',
              expanded: true,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      parentId: null,
      name: 'Archive Assets',
      expanded: false,
      children: [
        {
          id: '2-1',
          parentId: '2',
          name: 'Old_Marketing_Collateral.pdf',
          expanded: true,
          children: [],
        },
      ],
    },
  ];

  constructor(private readonly iconService: IgxIconService) {}

  ngOnInit(): void {
    // registers a 'material-symbols-outlined' class to be applied to all igx-icons with 'material-symbols' font-family
    this.iconService.setFamily('material-symbols', {
      className: 'material-symbols-outlined',
      type: 'liga',
    });

    //TODO: call API to get the tree data and populate the treeData array
  }

  // --- 1. Selection Mechanism ---
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

  // --- 2. Action Dropdown Controls ---

  private addChildNode(parent: TreeNode): void {
    const newId = `${parent.id}-${(parent.children?.length || 0) + 1}`;
    const newChild: TreeNode = {
      id: newId,
      name: `New Child Node (${newId})`,
      parentId: parent.id,
      expanded: false,
      children: [],
    };

    parent.children ??= [];
    parent.children.push(newChild);
    parent.expanded = true;
    this.treeData = [...this.treeData];
  }

  private renameNode(node: TreeNode): void {
    //TODO: call API to rename the node in the backend
    // Update the local tree structure to reflect the change
    // the code below is sample code, feel free to replace it with your own implementation
    const originalLabel = node.name;
    const promptValue = prompt('Enter a new name for the node:', originalLabel);
    if (promptValue !== null && promptValue.trim() !== '') {
      node.name = promptValue.trim();
    }
  }

  private deleteNode(node: TreeNode): void {
    //TODO: call API to delete the node in the backend
    // Update the local tree structure to reflect the change
    // the code below is sample code, feel free to replace it with your own implementation
    if (confirm(`Are you sure you want to delete "${node.name}"?`)) {
      this.findAndRemoveNode(this.treeData, node.id);
      this.treeData = [...this.treeData];
      if (this.selectedNode === node) {
        this.selectedNode = null;
      }
    }
  }

  private inactivateNode(node: TreeNode): void {
    //TODO: call API to inactivate the node in the backend
    // Update the local tree structure to reflect the change
    // the code below is sample code, feel free to replace it with your own implementation
    node.name = `${node.name} (Inactive)`;
    this.treeData = [...this.treeData];
  }

  private copyNode(node: TreeNode): void {
    //TODO: call API to copy the node in the backend
    //Update the local tree structure to reflect the change
  }


  // Handles context menu actions
  onContextMenuAction(action: string, node: TreeNode): void {
    alert(`Action: ${action} on Node: ${node?.name}`);
    switch (action) {
      case treeAction.addChild:
        this.addChildNode(node);
        break;
      case treeAction.rename:
        this.renameNode(node);
        break;
      case treeAction.delete:
        this.deleteNode(node);
        break;
      case treeAction.inactivate:
        this.inactivateNode(node);
        break;
      case treeAction.copy:
        this.copyNode(node);
        break;
      case treeAction.addGroup:
        this.addChildNode(node);
        break;
      default:
        console.warn(`Unhandled context menu action: ${action}`);
    }
    //close the context menu after an action is performed
    const nodeElement = globalThis.document.querySelector(`div[id='node-id-${node.id}']`);
    if (nodeElement) {
      this.closeContextMenu(nodeElement);
    }
  }

  // --- 3. Drag and Drop Structural Implementations ---

  private handleNodeDrop(sourceNode: TreeNode, targetNode: TreeNode) {
    //TODO: call API to update the backend with the new parent-child relationship
    //finally, update the local tree structure to reflect the change
    this.moveNodeInTree(sourceNode, targetNode);
  }

  //when a node is dragged, set it as the selected node and close any open context menus
  public onDragStart(event: any, node: TreeNode): void {
    if (node) {
      this.selectedNode = node;
    }
    // close the context menu if it's open
    this.closeContextMenu(event.owner.element.nativeElement);
  }

  // Reset the draggedOverNode when the drag operation ends
  public onDragEnd(): void {
    this.draggedOverNode = null;
  }

  // Handle the drag enter event to determine if the target node is a valid drop target
  // validation is here to ensure that a node cannot be dropped into itself or any of its descendants
  public onDragEnter(event: any, targetNode: TreeNode): void {
    const sourceNode = event.dragData as TreeNode;

    // Prevent dropping a root node into another root node
    if (
      sourceNode?.parentId == null ||
      (sourceNode?.parentId == null && targetNode?.parentId == null)
    ) {
      this.isValidDropTarget = false;
      return;
    }
    // Good to move, highlight drop targets, excluding itself and any nested children
    if (sourceNode.id !== targetNode.id && !this.isDescendantOf(sourceNode, targetNode)) {
      this.draggedOverNode = targetNode;
      this.renderer.addClass(event.owner.element.nativeElement, 'active');
      this.ghostMessage = `Move to "${targetNode.name}"`;
      this.isValidDropTarget = true;
    }
    // Invalid drop target, remove any highlighting
    else {
      this.isValidDropTarget = false;
    }
  }

  // Handle the drag leave event to reset the draggedOverNode and remove highlighting
  public onDragLeave(event: any): void {
    this.draggedOverNode = null;
    this.renderer.removeClass(event.owner.element.nativeElement, 'active');
    this.isValidDropTarget = false;
    this.ghostMessage = '';
  }

  // Handle the drop event to move the source node to the target node
  // Validation is performed in onDragEnter to ensure the drop is allowed
  public onNodeDropped(event: any, targetNode: TreeNode): void {
    event.cancel = true; // Prevent default absolute translation
    const sourceNode = event.dragData as TreeNode;

    if (!this.isValidDropTarget) {
      return;
    }

    //if (!sourceNode || sourceNode.id === targetNode.id) return;

    // Cyclic Check: Make sure a parent branch cannot be dropped into its own child branch
    // if (this.isDescendantOf(sourceNode, targetNode)) {
    //   console.warn('Invalid Drag and Drop: cannot move parent branch into its own descendants.');
    //   return;
    // }

    // Execute safe structural shift on your underlying data models
    this.handleNodeDrop(sourceNode, targetNode);

    this.draggedOverNode = null;
  }

  // --- 4. Recursive Helper Functions ---
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

  private closeContextMenu(element: any): void {
     // close the context menu if it's open
    const menuBtn = element.querySelector('div.d-inline-block > button');
    const menuContext = element.querySelector('div.d-inline-block > ul');
    if (menuBtn) {
      this.renderer.removeClass(menuBtn, 'show');
    }

    if (menuContext) {
      this.renderer.removeClass(menuContext, 'show');
    }
  }

  // --- 5. Node behavioral methods for toggling expansion and handling ghost creation ---
  // Toggles the expanded/collapsed state of a node
  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }
  // update the view after a ghost is created to ensure the ghost message is displayed correctly
  public onGhostCreated(): void {
    this.cdr.detectChanges();
  }
}
