function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function getVal(l1) {
  let digits = []
  while (l1) {
    digits.unshift(l1.val)
    l1 = l1.next
  }
  return BigInt(digits.join(''))
}

var addTwoNumbers = function(l1, l2) {
    let n1 = getVal(l1), n2 = getVal(l2), f = false;
    
    let temp = new ListNode(0, null)
    l1 = temp
    String(n1+n2).split("").map(x => parseInt(x)).reverse().forEach(x => {
        if (!f) {
            temp.val = x
            f = true;
        } else {
            temp.next = new ListNode(x, null)
            temp = temp.next
        }
    })
    return l1
};