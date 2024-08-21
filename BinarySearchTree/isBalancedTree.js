var Height = function (node) {
  if (node === null) {
    return 0;
  }
  // here I calculate the maximum height of the left and right nodes and add 1 for the current node to get the total height
  return Math.max(Height(node.left), Height(node.right)) + 1;
};

var isBalanced = function (root) {
  if (!root) {
    // if there is no nodes in the tree, it returns true
    return true;
  }
  // here I apply the balance rule to compare between the leftHeight and the rightHeight
  if (Math.abs(Height(root.left) - Height(root.right)) > 1) {
    return false;
  }
  // here I call the function recursively
  return isBalanced(root.left) && isBalanced(root.right);
};
