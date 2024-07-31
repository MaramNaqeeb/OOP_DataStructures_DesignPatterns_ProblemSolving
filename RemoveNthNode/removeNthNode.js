// Definition for singly-linked list.
// function ListNode(val, next) {
//    this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head == null || head.next == null) {
    return null;
  }
  let left = head;
  let right = head;

  for (let i = 0; i < n; i++) {
    // the space between the two pointers should be n length
    right = right.next;  // the right pointer moves forward to reach the value of n
  }

  if (right == null) {
    // in case that n is greater than the linkedlist, which gets the right pointer pointing to null
    return head.next;
  }
  while (right.next) {
    right = right.next; // move it forward till it points to the node previous to null
    left = left.next; // move it forward till it points to the node previous to the node that should be removed
  }
  let temp = left.next; // I use temp to remove the node completely from memory
  left.next = temp.next; // the left pointer points to the next of its next node to remove its next node
  temp = null;

  return head;
};
