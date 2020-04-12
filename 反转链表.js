const reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
}
