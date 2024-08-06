class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("The queue is empty");
    }
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length == 0;
  }
  peak() {
    return this.items[0]; // return the first value in the queue
  }
  print() {
    console.log(this.items);
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("The queue peak is: "+queue.peak());
queue.dequeue();
queue.dequeue();
console.log("Is it empty: "+queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log("Is it empty: "+queue.isEmpty());
queue.print();
