/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 1 -> 2 -> 3 -> null
 */
const reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const tmp = cur.next; // 2
    cur.next = prev; // null <- 1 -> 2
    prev = cur;
    cur = tmp;
  }
  return prev;
};
