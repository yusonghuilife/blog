function ListNode(val) {
  this.val = val
  this.next = null
}

let list1 = new ListNode(1)
let list2 = new ListNode(2)
let list3 = new ListNode(3)
let list4 = new ListNode(4)
let list5 = new ListNode(5)
list1.next = list2
list2.next = list3
list3.next = list4
list4.next = list5

const reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
    console.log("pre", pre, "cur", cur)
  }
  return pre
}

let reversed = reverseList(list1)
while (reversed) {
  console.log(reversed)
  reversed = reversed.next
}
