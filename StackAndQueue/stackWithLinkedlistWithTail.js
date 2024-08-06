class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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

  removeEnd() {
    if (!this.head) {
      // if the stack is empty
      return;
    }
    const value = this.tail.value;
    if (this.head == this.tail) {
      // if there is only one node in the stack
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      let prev = this.head;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }
    this.length--;
    return value;
  }
  peak() {
    if (this.isEmpty()) {
      console.log("The stack is empty");
      return Number.MIN_VALUE;
    }
    return this.tail.value;
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
stack.addLast(10);
stack.addLast(11);
stack.addLast(12);
stack.removeEnd();
stack.removeEnd();
stack.print();
console.log("The stack peak is: "+stack.peak());

