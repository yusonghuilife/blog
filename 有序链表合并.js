function mergeTwoSortedList(headA, headB) {
  let newList = null
  let pA = headA
  let pB = headB
  let root = newList
  while (pA && pB) {
    if (pA > pB) {
      newList.next = pB
      pB = pB.next
    } else {
      newList.next = pA
      pA = pA.next
    }
  }

  if (pA) {
    newList.next = pA.next
  }
  if (pB) {
    newList.next = pB.next
  }
  return root.next
}
