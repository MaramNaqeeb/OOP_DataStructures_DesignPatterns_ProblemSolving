class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
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

  addLast(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.addFirst();
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  addPosition(value, index) {
    let newNode = new Node(value);
    let curr = this.head;
    if (index < 0) {
      console.log("position cannot be negative");
      return;
    } else {
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }

  removeEnd() {
    if (!this.head) {
      console.log("list is already empty");
      return;
    }
    let curr = this.head;
    if (curr.next == null) {
      this.head = null;
    }
    while (curr.next && curr.next.next) {
      curr = curr.next;
    }

    let temp = curr.next;
    curr.next = null;
    temp = null;
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
  removePosition(index) {
    var curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    var temp = curr.next;
    curr.next = curr.next.next;
    temp = null;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    this.head = prev;
  }
  serach(value) {
    if (!this.head) {
      return false;
    }
    let curr = this.head;
    while (curr) {
      if (curr.value == value) {
        return true;
      }

      curr = curr.next;
    }
    return false;
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

const list = new LinkedList();
list.addFirst(10);
list.addFirst(11);
list.addFirst(12);
list.addLast(1);
list.addPosition(3, 3);
list.removeEnd();
list.removeFirst();
list.removePosition(2);
list.reverse();
console.log(list.serach(10));
list.print();
