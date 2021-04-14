/**
 * Given: head of node. and integer to add to the list.
 * Insert node at the tail end. 
 * Return head of list with the new node. 
 * Initial list is empty.
 */

/**
 * Case 1: The list is empty.
 * Case 2: the list is not empty.
 */

class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Given
let head = null;

//O(n) = n
const insertNodeAtTail = (head, data) => {
    if(!head) {
        head = new SinglyLinkedListNode(data);
    } else {
        let nodeWalker = head;

        while(nodeWalker.next) {
            nodeWalker = nodeWalker.next;
        }

        nodeWalker.next = new SinglyLinkedListNode(data);
    }

    return head;
}

const data = [141, 302, 164, 530, 474];
data.forEach(el => {
    head = insertNodeAtTail(head, el);
})
//insertNodeAtTail(head, 141);