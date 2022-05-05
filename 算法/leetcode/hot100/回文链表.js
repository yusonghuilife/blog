/**
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

示例 1：

输入：head = [1,2,2,1]
输出：true
示例 2：

输入：head = [1,2]
输出：false

提示：
链表中节点数目在范围[1, 105] 内
0 <= Node.val <= 9

进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

链接：https://leetcode-cn.com/problems/palindrome-linked-list
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  if (!head || !head.next) return true;
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);
  let p = head;
  let q = secondHalfStart;
  let result = true;
  while (result && q) {
    if (p.val !== q.val) {
      result = false;
    }
    p = p.next;
    q = q.next;
  }
  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};

const endOfFirstHalf = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

const reverseList = (node) => {
  let pre = null;
  let cur = node;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
