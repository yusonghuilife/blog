/**
 * Definition for singly-linked list.
 */
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const tmpHead = new ListNode(null, head);
  let p = tmpHead;
  let q = tmpHead.next;
  for (let i = 0; i < n; i++) {
    q = q.next;
  }
  while (q) {
    p = p.next;
    q = q.next;
  }
  // delete p.next
  p.next = p.next.next;
  return tmpHead.next;
};
