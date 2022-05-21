/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1n = l1;
  let array1 = [];
  while (l1n != null) {
    array1.push(l1n.val);
    n = n.next;
  }
  let l2n = l2;
  let array2 = [];
  while (l2n != null) {
    array2.push(l2n.val);
    n = n.next;
  }
  const rl1 = parseInt(array1.slice().reverse().join(''));
  const rl2 = parseInt(array2.slice().reverse().join(''));
  return (rl1 + rl2).toString().split('').reverse();
};
