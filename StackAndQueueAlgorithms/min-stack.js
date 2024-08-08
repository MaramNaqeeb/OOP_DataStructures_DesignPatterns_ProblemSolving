var MinStack = function () {
  this.head = null;
};
var stackNode = function (value, minimum) {   // I added this function to create a node as I am using a linked list not an array 
  this.value = value;
  this.next = null;
  this.minimum = minimum;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let newNode = new stackNode(val, val); 
  if (!this.head) {
    this.head = newNode;  // the minimum node is the head as there is no other nodes
  } else {
    newNode = new stackNode(val, Math.min(val, this.head.minimum)); /** when a new node is created, the new node will
                                                                     store its value and the minimum value 
                                                                     up to the top of the stack to compare between them.**/
    newNode.next = this.head;
    this.head = newNode;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.head) {
    console.log("The stack is empty");
    return;
  }

  let temp = this.head; // I store the head in a temp to remove the node completely from the memory
  this.head = temp.next;
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
    console.log("The stack is empty");
  }
  return this.head.minimum;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
