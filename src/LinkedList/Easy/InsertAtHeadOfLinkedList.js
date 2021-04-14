/**
 * 1. Head may be empty
 */

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

const insertNodeAtHead = (head, data) => {
    if(!head) {
        head = new SinglyLinkedListNode(data);
    } else {
        const newNode = new SinglyLinkedListNode(data);
        newNode.next = head;
        head = newNode;
    }

    return head;
}

//case 1:
let head = null; 
head = insertNodeAtHead(head, 393);
head = insertNodeAtHead(head, 484);
head = insertNodeAtHead(head, 392);
head = insertNodeAtHead(head, 975);
head = insertNodeAtHead(head, 321);
printList(head);
