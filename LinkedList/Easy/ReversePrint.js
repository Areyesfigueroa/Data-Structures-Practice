/**
 * Print in reverse order
 * 1->2->3->null
 * Result: 3, 2, 1
 */
class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const reversePrint = (head) => {
    if(!head) {
        return;
    } else {
        reversePrint(head.next);
        console.log(head.data);
    }
}

let head = new SinglyLinkedListNode(1);
head.next = new SinglyLinkedListNode(2);
head.next.next = new SinglyLinkedListNode(3);
reversePrint(head);