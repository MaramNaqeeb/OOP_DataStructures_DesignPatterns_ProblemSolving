class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail=null
  }

  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }
  addLast(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removeFirst() {
    if (!this.head) {
      console.log("list is already empty");
      return;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp = null;
  }
  peak() {
    if (this.isEmpty()) {
      console.log("The queue is empty");
      return Number.MIN_VALUE;
    }
    return this.head.value;
  }
  print() {
    if (!this.head) {
      console.log("the list is empty");
    } else {
      let curr = this.head;

      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }
}

const queue = new Queue();
queue.addLast(10);
queue.addLast(11);
queue.addLast(12);
queue.removeFirst();
queue.print();
console.log("The queue peak is: " + queue.peak());
