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
      // here I convert the linkedlist into an array to convert it into a BST
      arr.push(head.val); // I initialize the array by pushing the head value to the array
      head = head.next;
    }
    return convert(arr, 0, arr.length - 1);
  };
  var convert = function (head, left, right) {
    if (left > right) return null;
  
    let mid = Math.floor((left + right) / 2); // I get the mid of the array
    let root = new TreeNode(head[mid]); // here I create the BST root which is the mid element of the array
    root.left = convert(head, left, mid - 1); // here I convert the left side of the array to be the left side of the tree
    root.right = convert(head, mid + 1, right); // here I convert the right side of the array to be the right side of the tree
    return root;
  };
  