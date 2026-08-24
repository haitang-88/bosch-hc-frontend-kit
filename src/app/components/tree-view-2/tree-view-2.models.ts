export interface TreeNode {
  id: string;
  parentId: string | null;
  name: string;
  expanded: boolean;
  children: TreeNode[];
}

/** Callbacks exposed by TreeView2 that the recursive node component needs. */
export interface TreeViewController {
  selectedNode: TreeNode | null;
  draggedOverNode: TreeNode | null;
  selectNode(node: TreeNode, event: MouseEvent): void;
  onDragStart(event: any, node: TreeNode): void;
  onDragEnd(): void;
  onDragEnter(event: any, node: TreeNode): void;
  onDragLeave(event: any): void;
  onNodeDropped(event: any, node: TreeNode): void;
  onContextMenuAction(action: string, node: TreeNode): void;
}

export const treeAction = {
  addChild: 'add-child',
  rename: 'rename',
  delete: 'delete',
  inactivate: 'inactivate',
  copy: 'copy',
  addGroup: 'add-group',
};
