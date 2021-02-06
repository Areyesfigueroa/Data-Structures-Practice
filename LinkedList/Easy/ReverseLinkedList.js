const { SinglyLinkedListNode } = require('../../utils/linkedListUtils');
utils = require('../../utils/linkedListUtils');

const reverse = (currentNode, prevNode = null) => {
    if(currentNode === null) {
        return;
    } else {
        reverse(currentNode.next, currentNode);

        if(prevNode != null) {
            currentNode.next = prevNode;
            //1->2->3->null
            //3->2(c), 2->3(p) 
            //2->1(c), 1->2(p)
            //1->null
            console.log("Current Node: " + currentNode.data);
            console.log("Current Node's Next: " + currentNode.next.data);
            console.log("PrevNode: " + prevNode.data);
            console.log("PrevNode's Next: " + prevNode.next.data);
        } else {
            currentNode.next = null;
        }
    }
}

let head = new SinglyLinkedListNode(1);
head.next = new SinglyLinkedListNode(2);
head.next.next = new SinglyLinkedListNode(3);
utils.printList(head);
reverse(head);
utils.printList(head);

