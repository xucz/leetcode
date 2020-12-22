/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// let zigzagLevelOrder = function(root) {
//     let level = 0;
//     let index = 0;
//     let end = Math.pow(2, level + 1) - 2;
//     let result = [];
//     while(index < root.length) {
//         let currentLevel = [];
//         while(index <= end) {
//             if (index >= root.length) {
//                 break;
//             } else if (root[index] !== null) {
//                 currentLevel.push(root[index])
//             }
//             index ++;
//         }
//         result.push(currentLevel);
//         level ++;
//         end = Math.pow(2, level + 1) - 2;
//     }
//     return result;
// };
// console.log(zigzagLevelOrder([3,9,20,null,null,15,7]))

let zigzagLevelOrder = function(root) {
    if(!root) {
        return [];
    }
    let nodeList = [root];
    let result = [];
    let order = true;
    getItem(nodeList);
    function getItem (arr) {
        if(arr.length === 0) {
            return;
        }
        let currentLevel = [];
        let children = [];
        for (let i = 0; i < arr.length; i ++) {
            let item = arr[i];
            if (order) {
                currentLevel.push(item.val);
            } else {
                currentLevel.unshift(item.val);
            }
            item.left !== null && children.push(item.left);
            item.right !== null && children.push(item.right);
        }
        order = !order;
        result.push(currentLevel);
        getItem(children);
    }
    return result;
}

function TreeNode(val) {
 this.val = val;
 this.left = this.right = null;
}
[3,9,20,null,null,15,7]

let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a4 = new TreeNode(15);
let a5 = new TreeNode(7);
// let a6 = TreeNode(6);

a1.left = a2;
a1.right = a3;

// a2.left = a4;
// a2.right = a5;

a3.left = a4;
a3.right = a5;

console.log(zigzagLevelOrder(a1))
