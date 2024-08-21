/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function (head) {
  let arr = [];
  while (head) {
    // here I create the array that I will convert to a BST
    arr.push(head.val); // I instantiate the array by pushing the head value to the array
    head = head.next; // here I push the nodes next to the head
  }
  return convert(arr, 0, arr.length - 1);
};
var convert = function (head, left, right) {
  if (left > right) return null;

  let mid = Math.floor((left + right) / 2); // get the mid of the array
  let root = new TreeNode(head[mid]); // creating the BST node
  root.left = convert(head, left, mid - 1);
  root.right = convert(head, mid + 1, right);
  return root;
};
