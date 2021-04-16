export{};
/**
 * Resources:
 * Queues: https://www.javascripttutorial.net/javascript-queue/
 * BinaryTreeInsertion LevelOrder: https://www.geeksforgeeks.org/insertion-in-a-binary-tree-in-level-order/
 */
export class Node {
    key: number;
    left: Node | null;
    right: Node | null;

    constructor(item: number) {
        this.key = item;
        this.left = this.right = null;
    }
}

const COUNT:number = 8;
export class BinaryTree {
    root:Node | null = null;
    log:string = '';

    constructor(key:number | null = null) {
        this.root = key ? new Node(key):null;
    }


    insert = (key:number) => {
        this.insertUtil(this.root, key)
    }

    insertUtil = (temp:Node | null, key:number) => {
        //Base case
        if(temp === null) {
            this.root = new Node(key);
            return;
        }
    }

    preOrderTraversal = (node:Node|null) => {
        
        //Base case
        if(node === null) {
            return;
        }

        console.log(node.key);

        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    inOrderTraveral = (node:Node|null) => {
        //Base case
        if(node === null) return;

        this.inOrderTraveral(node.left);
        console.log(node.key);
        this.inOrderTraveral(node.right);
    }

    postOrderTraversal = (node:Node|null) => {
        if(node === null) return;

        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.key);
    }


    print2DUtil = (root:Node | null, space:number) => {
        // Base Case
        if(root === null) return;

        //Increase distance between levels
        space += COUNT;

        //Process right child first
        this.print2DUtil(root.right, space);

        this.log += "\n";
        for (let index = COUNT; index < space; index++) {
            this.log += ' ';
        }
        this.log += `${root.key}\n`;

        //Process left child
        this.print2DUtil(root.left, space);
    }

    print2D = () => {
        this.print2DUtil(this.root, 0);
        console.log(this.log);
    }
}



//      1
//    /   \
//   2     3 
//  / \   / \
// 4   5  6  7 