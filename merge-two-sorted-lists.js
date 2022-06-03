/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list3 = new ListNode();
  let current1 = list1;
  let current2 = list2;
  let current3 = list3;
  while (current1 != null && current2 != null) {
    if (current1.val < current2.val) {
      current3.next = new ListNode(current1.val);
      current1 = current1.next;
      current3 = current3.next;
    } else {
      current3.next = new ListNode(current2.val);
      current2 = current2.next;
      current3 = current3.next;
    }
  }
  if (current1 != null) {
    current3.next = current1;
  } else {
    current3.next = current2;
  }
  return list3.next;
};
