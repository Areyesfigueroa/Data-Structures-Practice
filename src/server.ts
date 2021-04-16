import {
  BinarySearchTree,
  Node,
} from "./DataStructures/BinarySearchTree/BinarySearchTree";

const bst: BinarySearchTree = new BinarySearchTree();

bst.addNode(50, "root");

bst.addNode(25, "left, Level 1");
bst.addNode(75, "Right, Level 1");

bst.addNode(15, "Left-Left, Level 2");
bst.addNode(30, "Left-Right, Level 2");
bst.addNode(85, "Right-Right, Level 2");

// console.log("In Order Traveral");
// bst.inOrderTraveral(bst.root);
// console.log("\nPre Order Traveral");
// bst.preOrderTraveral(bst.root);
// console.log("\nPost Order Traversal");
// bst.postOrderTraveral(bst.root);

// const node: Node | null = bst.findNode(75);
// console.log(node?.key);
