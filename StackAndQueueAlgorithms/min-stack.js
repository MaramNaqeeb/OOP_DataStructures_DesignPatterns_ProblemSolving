var MinStack = function () {
  this.head = null;
};
var stackNode = function (value, min) {
  this.value = value;
  this.next = null;
  this.min = min;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let newNode = new stackNode(val, val); // the min node is the head as there is no other nodes
  if (!this.head) {
    this.head = newNode;
  } else {
    newNode = new stackNode(val, Math.min(val, this.head.min)); // the min node is created at the top of the stack
    newNode.next = this.head;
    this.head = newNode;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.head) {
    console.log("list is already empty");
    return;
  }

  let temp = this.head; // I store the head in a temp to remove the node completely from the memory
  this.head = this.head.next;
  temp = null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (!this.head) {
    console.log("The stack is empty");
  }
  return this.head.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (!this.head) {
    console.log("Stack is empty");
  }
  return this.head.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
