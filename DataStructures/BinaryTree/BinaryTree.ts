export{};
/**
 * Resources:
 * Queues: https://www.javascripttutorial.net/javascript-queue/
 * BinaryTreeInsertion LevelOrder: https://www.geeksforgeeks.org/insertion-in-a-binary-tree-in-level-order/
 */
class Node {
    key: number;
    left: Node;
    right: Node;

    constructor(item: number) {
        this.key = item;
        this.left = this.right = null;
    }
}

const COUNT:number = 8;
class BinaryTree {
    root:Node | null = null;
    log:string = '';

    constructor(key:number = null) {
        this.root = key ? new Node(key):null;
    }


    insert = (key:number) => {
        this.insertUtil(this.root, key)
    }

    insertUtil = (temp:Node, key:number) => {
        //Base case
        if(temp === null) {
            this.root = new Node(key);
            return;
        }

        //Create a queue to use here: 
        // const queue:Array<Node> = [];
        // queue.
    }

    print2DUtil = (root:Node, space:number) => {
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

//Leveled Binary Tree
const tree:BinaryTree = new BinaryTree();

// Create the root
tree.root = new Node(1); 

tree.insert(2);
// tree.root.left = new Node(2); 
// tree.root.right = new Node(3); 

// tree.root.left.left = new Node(4); 
// tree.root.left.right = new Node(5); 
// tree.root.right.left = new Node(6); 
// tree.root.right.right = new Node(7); 

// tree.root.left.left.left = new Node(8); 
// tree.root.left.left.right = new Node(9); 
// tree.root.left.right.left = new Node(10); 
// tree.root.left.right.right = new Node(11); 
// tree.root.right.left.left = new Node(12); 
// tree.root.right.left.right = new Node(13); 
// tree.root.right.right.left = new Node(14); 
// tree.root.right.right.right = new Node(15); 

tree.print2D();

//      1
//    /   \
//   2     3 
//  / \   / \
// 4   5  6  7 