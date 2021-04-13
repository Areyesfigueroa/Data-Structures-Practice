export{}

class Queue<Type> {
    #elements:Type[] = [];
    
    //Add element from the back
    enqueue: (e:Type) => void = (e) => {
        this.#elements.push(e);
    }

    //Remove element from the front
    dequeue: () => Type = () => {
        return this.#elements.shift();
    } 

    isEmpty: () => boolean = () => {
        return this.#elements.length === 0;
    }

    length: () => number = () => {
        return this.#elements.length;
    }

    peek: () => Type = () => {
        return this.#elements[0];
    }
}

let q = new Queue<number>();

for(let i:number = 1; i <= 7; i++) {
    q.enqueue(i);
}

console.log(q.peek());
console.log(q.length());

//dequeue all elements

while(!q.isEmpty()) {
    console.log(q.dequeue());
}
console.log(q.length());

