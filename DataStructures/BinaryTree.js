function Node(data, leftNode, rightNode) {
    this.data = (!data) ? 0: data;
    this.leftNode = (!leftNode) ? null: leftNode;
    this.rightNode = (!rightNode) ? null: rightNode;
}


// root.leftNode = new Node(2);
// root.rightNode = new Node(3);

// root.leftNode.leftNode = new Node(4);

// console.log(root.data);
// console.log(root.leftNode.data);
// console.log(root.rightNode.data);
// console.log(root.leftNode.leftNode.data);

const insertNode = (node, newValue) => {
    if(node === null) {
        node = new Node(newValue);
        return;
    }

    if(node.leftNode === null) insertNode(node.leftNode, newValue);
}

const root = new Node(1);
insertNode(root, 2);

console.log(root.data);
console.log(root.leftNode.data);


