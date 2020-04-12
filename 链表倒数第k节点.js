function FindKthNode(head, k) {
  let p = (q = head)
  while (p && k !== 0) {
    p = p.next
    k--
  }
  while (p) {
    p = p.next
    q = q.next
  }
  return q
}
