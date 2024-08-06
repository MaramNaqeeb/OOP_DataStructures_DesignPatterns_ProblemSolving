class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }
  addFirst(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
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
      console.log("The stack is empty");
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

const stack = new Stack();
stack.addFirst(10);
stack.addFirst(11);
stack.addFirst(12);
stack.removeFirst();
stack.print();
console.log("The stack peak is:"+stack.peak());

