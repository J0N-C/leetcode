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
  let l2n = l2;
  let l3 = new ListNode();
  let l3n = l3;
  let carried = 0;
  while (l1n !== null && l2n !== null) {
    let num1 = l1n.val + l2n.val;
    if (carried === 1) {
      num1++;
      carried = 0;
    }
    if (num1 > 9) {
      num1 -= 10;
      carried = 1;
    }
    l1n = l1n.next;
    l2n = l2n.next;
    l3n.next = new ListNode(num1);
    l3n = l3n.next;
  }
  if (l1n !== null) {
    while (carried === 1) {
      if (l1n === null) {
        carried = 0;
        l3n.next = new ListNode(1);
        l3n = l3n.next;
        break;
      }
      let num1 = l1n.val;
      num1++;
      carried = 0;
      if (num1 > 9) {
        num1 -= 10;
        carried = 1;
      };
      l1n = l1n.next;
      l3n.next = new ListNode(num1);
      l3n = l3n.next;
    };
    l3n.next = l1n;
  } else if (l2n !== null) {
    while (carried === 1) {
      if (l2n === null) {
        carried = 0;
        l3n.next = new ListNode(1);
        l3n = l3n.next;
        break;
      }
      let num1 = l2n.val;
      num1++;
      carried = 0;
      if (num1 > 9) {
        num1 -= 10;
        carried = 1;
      };
      l2n = l2n.next;
      l3n.next = new ListNode(num1);
      l3n = l3n.next;
    };
    l3n.next = l2n;
  }
  if (carried === 1) {
    l3n.next = new ListNode(1);
  };
  return (l3.next);
};
