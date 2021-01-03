/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

    let left = null;
    let leftHead = null;
    let right = null;
    let rightHead = null;

    let next = head;
    while(next) {
        let current = next;
        next = next.next;
        current.next = null;
        if (current.val < x) {
            if (left === null) {
                left = leftHead = current;
            } else {
                left.next = current;
                left = left.next;
            }
        } else {
            if (right === null) {
                right = rightHead = current;
            } else {
                right.next = current;
                right = right.next;
            }
        }
    }
    if (left) {
        left.next = rightHead;
    }
    if (leftHead) {
        return leftHead;
    } else {
        return rightHead;
    }
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}
var a1 = new ListNode(1);
var a2 = new ListNode(4);
var a3 = new ListNode(3);
var a4 = new ListNode(2);
var a5 = new ListNode(5);
var a6 = new ListNode(2);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;

let result = partition(a1, 3);

// console.log(result.next.next.next.next)
while(result) {
    console.log(result.val)
    result = result.next;
}
