/**
 * Cases:
 * 1. Head may be empty
 * 2. Insert outside the boundaries.
 * 3. Insert at the end of the list.
 * 4. Insert at the beginning of the list.
 * 5. Insert at the middle of the list.
 * 
 * Returns:
 * Reference to head node
 * 
 * Constraints
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

const insertNodeAtPosition = (head, data, position) => {
    //Case: Head is empty and we are adding out of bounds.
    if(!head && position > 0) {
        console.log("Out of bounds");
        return;
    }

    let newNode = new SinglyLinkedListNode(data);
    
    //Case: Inserting at the beginning of list
    if(position === 0) {
        let newNode = new SinglyLinkedListNode(data);
        newNode.next = head;
        head = newNode;
    }
    
    //Case: Inserting at middle of list  
    if(position > 0) {
        let currentNode = head;
        let prevNode = null;
        let idx = 0;

        while(idx !== position && currentNode) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            idx++;
        }

        //Case: Check position is not out of bounds.
        if(position > idx) {
            console.log('Out of bounds');
            return;
        }

        prevNode.next = newNode;
        newNode.next = currentNode;
    }

    return head;
}

let head = null;
head = insertNodeAtPosition(head, 16, 0);
head = insertNodeAtPosition(head, 13, 1);
head = insertNodeAtPosition(head, 7, 2);
printList(head);
head = insertNodeAtPosition(head, 1, 1);
printList(head);
