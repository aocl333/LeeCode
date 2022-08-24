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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    const res = [true];
    height(root, res);
    return res[0];
};

function height(root, res) {
    if (root === null) return 0;
    const l = height(root.left, res);
    const r = height(root.right, res);
    if (Math.abs(l - r) > 1) res[0] = false;
    return Math.max(l, r) + 1;
};