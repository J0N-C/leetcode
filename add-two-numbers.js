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
  let num1 = 0;
  let place = 1;
  while (l1n != null) {
    num1 += l1n.val * place;
    place *= 10;
    l1n = l1n.next;
  }
  let l2n = l2;
  let num2 = 0;
  place = 1;
  while (l2n != null) {
    num2 += l2n.val * place;
    place *= 10;
    l2n = l2n.next;
  }
  console.log('numcheck', num1, num2, num1 + num2)
  const reverseNum = String(num1 + num2).split('').reverse().join('');
  let reverseList = new ListNode(reverseNum[0])
  let rListHead = reverseList;
  for (let i = 1; i < reverseNum.length; i++) {
    reverseList.next = new ListNode(reverseNum[i])
    reverseList = reverseList.next;
  }
  return rListHead;
};
