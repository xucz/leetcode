/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    return revertLinkNode(null, head);
    function revertLinkNode(prev, next) {
        let tempNext = next.next;
        next.next = prev;
        if (tempNext !== null) {
            return revertLinkNode(next, tempNext);
        } else {
            return next;
        }
    }
};



function ListNode(val) {
    this.val = val;
    this.next = null;
}

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(JSON.stringify(reverseList(n1)))
