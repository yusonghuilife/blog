const getIntersectionNode = function (headA, headB) {
  let pA = headA
  let pB = headB
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next

    // 如果没有相交节点
    if (pA === headA && pB === headB) {
      return null
    }
  }
  return pA
}
