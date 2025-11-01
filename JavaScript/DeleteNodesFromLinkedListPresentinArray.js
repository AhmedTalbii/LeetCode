function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var modifiedList = function(nums, head) {
    let dl = new Set(nums), c = head, s = false;
    while (c !== null) {
        if (dl.has(c.val) && !s) {
            head = head.next;
        } else {
            s = true
            while (c.next && dl.has(c.next.val)) {
                if (c.next.next) c.next = c.next.next;
                else c.next = null;
            }
        }
        c = c.next;
    }
    return head;
};

console.log(JSON.stringify(modifiedList([1,2,3], head)));