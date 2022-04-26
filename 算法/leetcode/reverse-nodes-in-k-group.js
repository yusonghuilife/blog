const reverseNode = (head) => {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

const reverseGroup = (head, k) => {
  const dump = new ListNode(0);
  dump.next = head;
  let pre = dump;
  let end = dump;
  while (end.next !== null) {
    for (let i = 0; i < k && end; i++) end = end.next;
    if (!end) break;
    const start = pre.next;
    const next = end.next;
    end.next = null;
    pre.next = reverseNode(start);
    start.next = next;
    pre = start;
    end = start;
  }
  return dump.next;
};

// public ListNode reverseKGroup(ListNode head, int k) {
//   if (head == null || head.next == null){
//       return head;
//   }
//   //定义一个假的节点。
//   ListNode dummy=new ListNode(0);
//   //假节点的next指向head。
//   // dummy->1->2->3->4->5
//   dummy.next=head;
//   //初始化pre和end都指向dummy。pre指每次要翻转的链表的头结点的上一个节点。end指每次要翻转的链表的尾节点
//   ListNode pre=dummy;
//   ListNode end=dummy;

//   while(end.next!=null){
//       //循环k次，找到需要翻转的链表的结尾,这里每次循环要判断end是否等于空,因为如果为空，end.next会报空指针异常。
//       //dummy->1->2->3->4->5 若k为2，循环2次，end指向2
//       for(int i=0;i<k&&end != null;i++){
//           end=end.next;
//       }
//       //如果end==null，即需要翻转的链表的节点数小于k，不执行翻转。
//       if(end==null){
//           break;
//       }
//       //先记录下end.next,方便后面链接链表
//       ListNode next=end.next;
//       //然后断开链表
//       end.next=null;
//       //记录下要翻转链表的头节点
//       ListNode start=pre.next;
//       //翻转链表,pre.next指向翻转后的链表。1->2 变成2->1。 dummy->2->1
//       pre.next=reverse(start);
//       //翻转后头节点变到最后。通过.next把断开的链表重新链接。
//       start.next=next;
//       //将pre换成下次要翻转的链表的头结点的上一个节点。即start
//       pre=start;
//       //翻转结束，将end置为下次要翻转的链表的头结点的上一个节点。即start
//       end=start;
//   }
//   return dummy.next;

// }
