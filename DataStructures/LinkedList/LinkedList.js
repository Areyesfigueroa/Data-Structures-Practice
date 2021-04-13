
class LinkedList {
    constructor(element = null) {
        this.head = element ? new Node(element): null;
        this.size = element ? 1:0;
    }

    clear = () => {
        this.head = null;
    }

    print = () => {

        if(!this.head) console.log(null);

        let nodeWalker = this.head;
        let stringResult = "";

        while(nodeWalker) {
            stringResult += `${nodeWalker.val}->`;
            nodeWalker = nodeWalker.next;
        }

        stringResult+="null";

        console.log(stringResult);
    }

    getLast = () => {
        let lastNode = this.head;
        if(lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next; //1 | 2 | 3 | null
            }
        }

        return lastNode;
    }

    getFirst = () => {
        return this.head;
    }

    add = (element) => {
        if(this.head) {
            this.getLast().next = new Node(element);
        } else {
            this.head = new Node(element);
        }

        this.size++;
    }

    insertAt = (element, index) => {
        if(!this.head) return;
        
        let newNode = new Node(element);

        //Case 1: Add at 0
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }

        //Case 2: Add at the last Index
        if(index === this.size) {
            this.add(element);
        }

        //Case 3: Add in between
        if(index > 0 && index < this.size) {
            let node = this.head;
            let prevNode = null;
            let counter = 0;
            
            while(counter !== index && node) {
                counter++;
                prevNode = node;
                node = node.next;
            }

            prevNode.next = newNode;
            newNode.next = node;
        }


        this.size++;

        return newNode;
    }

    removeAt = (index) => {
        if(!this.head || index >= this.size) {
            console.log("Out of bounds, cannot remove at index: " + index); 
            return;
        }

        let nodeWalker = this.head;
        let prevNode = null;
        let counter = 0;

        if(index === 0) {
            this.head = this.head.next;
        }

        if(index === this.size - 1) {
            while(counter != index && nodeWalker) {
                counter++;
                prevNode = nodeWalker;
                nodeWalker = nodeWalker.next;
            }

            prevNode.next = null;
         }

        if(index > 0 && index < this.size - 1) {
            while(counter != index && nodeWalker) {
                counter++;
                prevNode = nodeWalker;
                nodeWalker = nodeWalker.next;
            }

            prevNode.next = nodeWalker.next;
            nodeWalker.next = null;
        }
        
        this.size--;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const list = new LinkedList(11);
list.add(4);
list.add(6);

list.insertAt(10, 1);
list.print();
list.removeAt(9);
list.print();
// list.removeAt(0);
// list.head.next = new Node(4);
// list.head.next.next = new Node(6);
// console.log(list.size());
// list.clear();
// console.log(list.getLast().val);
// console.log(list.getFirst().val);

