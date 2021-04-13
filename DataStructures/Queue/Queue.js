var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _elements;
class Queue {
    constructor() {
        _elements.set(this, []);
        //Add element from the back
        this.enqueue = (e) => {
            __classPrivateFieldGet(this, _elements).push(e);
        };
        //Remove element from the front
        this.dequeue = () => {
            return __classPrivateFieldGet(this, _elements).shift();
        };
        this.isEmpty = () => {
            return __classPrivateFieldGet(this, _elements).length === 0;
        };
        this.length = () => {
            return __classPrivateFieldGet(this, _elements).length;
        };
        this.peek = () => {
            return __classPrivateFieldGet(this, _elements)[0];
        };
    }
}
_elements = new WeakMap();
let q = new Queue();
for (let i = 1; i <= 7; i++) {
    q.enqueue(i);
}
console.log(q.peek());
console.log(q.length());
//dequeue all elements
while (!q.isEmpty()) {
    console.log(q.dequeue());
}
console.log(q.length());
