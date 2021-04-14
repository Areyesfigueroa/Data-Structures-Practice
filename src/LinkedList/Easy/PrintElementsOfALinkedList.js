/**
 * Print each node's data element one per line
 */
class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Given
const head = new SinglyLinkedListNode(16);
head.next = new SinglyLinkedListNode(13);


const printLinkedList = (head) => {
    let nodeWalker = head;

    while(nodeWalker) {
        console.log(nodeWalker.data);
        nodeWalker = nodeWalker.next; 
    }
}

printLinkedList(head);