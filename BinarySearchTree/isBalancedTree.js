var Height = function (node) {
  if (node === null) {
    return 0;
  }
  return Math.max(Height(node.left), Height(node.right)) + 1; // here I get the height of the left and right nodes and add 1 for the current node to get the total height
};

var isBalanced = function (root) {
  if (!root) {
    return true; // if there is no nodes in the tree, it returns true
  }

  // here I make an inOrder traversal for the tree and use two stacks to push to and pop from them

  let stack1 = [];
  let stack2 = [];

  stack1.push(root); // I instantiate the tree by pushing the root node to stack1

  while (stack1.length) {
    // here I push the left and right nodes to the stack1 and then pop them from stack1 in the curr variable to push the curr to stack2

    let curr = stack1.pop();

    stack2.push(curr);

    if (curr.left) stack1.push(curr.left);

    if (curr.right) stack1.push(curr.right);
  }

  while (stack2.length) {
    // here I pop from stack2 to check each node's height and then apply the balance rule to check if the tree is balanced or not
    let curr = stack2.pop();

    let rightHeight = 0;
    let leftHeight = 0;

    if (curr.left) leftHeight = Height(curr.left);

    if (curr.right) rightHeight = Height(curr.right);

    if (Math.abs(leftHeight - rightHeight) > 1)
      // here I apply the balance rule to compare between the leftHeight and the rightHeight
      return false;
  }
  // if the leftHeight-rightHeight <= 1; it returns true
  return true;
};
