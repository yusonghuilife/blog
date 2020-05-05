// 一个链表，奇数位升序偶数位降序，让链表变成升序的
const OddIncreaseEvenDecrease = function (head) {
  // 首先按照奇偶分成两个链表
  let [oddHead, evenHead] = divideList(head)
  // 偶数反转链表
  evenHead = reverseList(evenHead)
  // 合并
  return combineList(oddHead, evenHead)
}

const divideList = function (head) {
  let oddHead = null
  let evenHead = null
  let odd = null
  let even = null
  let count = 3
  head = head.next.next
  while (!head) {
    if (count % 2 === 0) {
      if (!even) {
        even.next = head
        even = even.next
      } else {
        evenHead = even = head
      }
    } else {
      if (!odd) {
        odd.next = head
        odd = odd.next
      } else {
        oddHead = odd = head
      }
    }
    head = head.next
    count++
  }
  odd.next = null
  even.next = null
  return [oddHead, evenHead]
}

const reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
  return pre
}

const combineList = function (head1, head2) {
  let head = null
  let firstNode = null
  while (hea1 && head2) {
    if (head1.val >= head2.val) {
      if (!head) {
        firstNode = head2
        head = head2
      } else {
        head.next = head2
      }
      head2 = head2.next
    } else {
      if (!head) {
        head = head1
      } else {
        head.next = head1
      }
      head1 = head1.next
    }
  }
  if (head1) {
    head.next = head1.next
  }
  if (head2) {
    head.next = head2.next
  }
  return firstNode
}
