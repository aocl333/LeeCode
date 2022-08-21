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
var isSymmetric = function(root) {
    return symmetric(root,root)
    
    function symmetric(treeLeft, treeRight) {
        if(treeLeft===null && treeRight===null) 
        {return true};
        if(treeLeft===null || treeRight===null) 
        {return false};
        return (treeLeft.val===treeRight.val) && symmetric(treeLeft.right,treeRight.left) && symmetric(treeLeft.left,treeRight.right)
    }
};