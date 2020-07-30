/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    traverseNodes(root, null);
    function traverseNodes(node, maxParentVal) {
        let max;
        if (maxParentVal === null) {
            max = node.val;
            count ++;
        } else if (node.val >= maxParentVal) {
            max = node.val;
            count ++;
        } else {
            max = maxParentVal;
        }
        
        if (node.left !== null) {
            traverseNodes(node.left, max);
        }
        
        if(node.right !== null) {
            traverseNodes(node.right, max);
        }
    }
    return count;
};

module.exports = goodNodes;
