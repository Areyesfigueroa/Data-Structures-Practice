import { Queue } from './DataStructures/Queue/Queue';

const q = new Queue<number>();

for(let i:number = 1; i <= 7; i++) {
    q.enqueue(i);
}

console.log(q.peek());
console.log(q.length());

console.log("Hello World 2");
