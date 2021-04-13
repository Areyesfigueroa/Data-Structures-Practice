export{};

class Node {
    key: number;
    left: Node;
    right: Node;

    constructor(item: number) {
        this.key = item;
        this.left = this.right = null;
    }
}

const COUNT:number = 10;
class BinaryTree {
    root:Node | null = null;

    constructor(key:number = null) {
        this.root = key ? new Node(key):null;
    }

    print2DUtil = (root:Node, space:number) => {
        // Base Case
        if(root === null) return;

        //Increase distance between levels
        space += COUNT;

        //Process right child first
        this.print2DUtil(root.right, space);

        console.log("\n");
        for (let index = COUNT; index < space; index++) {
            console.log(' ');
            console.log(`${root.key}\n`);
        }

        //Process left child
        this.print2DUtil(root.left, space);
    }

    print2D = () => {
        this.print2DUtil(this.root, 0);
    }
}

const tree:BinaryTree = new BinaryTree();

// Create the root
tree.root = new Node(1); 
tree.root.left = new Node(2); 
tree.root.right = new Node(3); 

tree.root.left.left = new Node(4); 
tree.root.left.right = new Node(5); 
tree.root.right.left = new Node(6); 
tree.root.right.right = new Node(7); 

tree.root.left.left.left = new Node(8); 
tree.root.left.left.right = new Node(9); 
tree.root.left.right.left = new Node(10); 
tree.root.left.right.right = new Node(11); 
tree.root.right.left.left = new Node(12); 
tree.root.right.left.right = new Node(13); 
tree.root.right.right.left = new Node(14); 
tree.root.right.right.right = new Node(15); 

tree.print2D();

//      1
//    /   \
//   2     3 
//  / \   / \
// 4   5  6  7 