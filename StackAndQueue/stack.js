class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      console.log("The stack is empty");
    }
    return this.items.pop(); //here I use return as pop() returns the value deleted
  }
  isEmpty() {
    return this.items.length == 0;
  }
  peak() {
    return this.items[this.items.length - 1]; // return the last value in the stack
  }
  print() {
    let top = this.items.length - 1;
    while (top >= 0) {
      console.log(this.items[top]);
      top--;
    }
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("The stack peak: "+stack.peak());
stack.pop();
stack.pop();
console.log("Is it empty: "+stack.isEmpty());
stack.pop();
stack.pop();
console.log("Is it empty: "+stack.isEmpty());
stack.print();
