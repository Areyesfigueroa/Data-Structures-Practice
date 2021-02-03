class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const printList = (head) => {
    let nodeWalker = head;
    let nodeResult = '';

    while(nodeWalker) {
        nodeResult += nodeWalker.data + "->";
        nodeWalker = nodeWalker.next;
    }

    nodeResult += "null";
    console.log(nodeResult);
}

module.exports = {
    SinglyLinkedListNode,
    printList
}