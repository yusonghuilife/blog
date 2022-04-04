/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let listNode = null;
  let resultListNode = null;
  let overNum = 0;
  while (node1 || node2) {
    let sum = 0;
    const node = new ListNode();
    if (node1 && node2) {
      sum = node1.val + node2.val + overNum;
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1) {
      sum = node1.val + overNum;
      node1 = node1.next;
    } else {
      sum = node2.val + overNum;
      node2 = node2.next;
    }
    node.val = sum % 10;
    if (listNode) {
      listNode.next = node;
      listNode = node;
    } else {
      listNode = node;
      resultListNode = listNode;
    }
    overNum = (sum - (sum % 10)) / 10;
  }

  if (overNum > 0) {
    listNode.next = new ListNode(overNum, null);
  }
  return resultListNode;
};
