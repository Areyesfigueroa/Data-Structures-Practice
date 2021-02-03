/**
 * 
 * Return: head node
 * 
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


const deleteNode = (head, position) => {
    if(!head) return null;

    if(position === 0) {
        head = head.next;
    }

    if(position > 0) {
        let currentNode = head;
        let prevNode = null;
        let idx = 0;
        
        while(idx !== position && currentNode) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            idx++;
        }

        if(position >= idx && !currentNode) {
            console.log("out of bounds");
            return;
        }
    
        prevNode.next = currentNode.next;
        currentNode.next = null;
    }

    return head;
}

let head = new SinglyLinkedListNode(0);
head.next = new SinglyLinkedListNode(1);
head.next.next = new SinglyLinkedListNode(2);
head.next.next.next = new SinglyLinkedListNode(3);
printList(head);

//Delete firstNode
head = deleteNode(head, 4);
printList(head);

