function ListNode(val, next) {
  this.val = val ?? 0;
  this.next = next ?? null;
}

var deleteDuplicates = function(head) {
    if (!head) return head
    let c = head;
    while (c !== null) {
        if (c.next != null && c.val === c.next.val) c.next = c.next.next;
        else c = c.next;
    }
    return head
};

let head = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(JSON.stringify(deleteDuplicates(head)));
