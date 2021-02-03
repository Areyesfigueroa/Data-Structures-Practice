/**
 * Explanation:
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the longest path 
 * from the root node down to the farthest leaf node.
 * 
 * Examples:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * 
 * Input: root = [1,null,2]
 * Output: 2
 * 
 * Input: root = []
 * Output: 0
 * 
 * Input: root = [0]
 * Output: 1
 * 
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

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null: left);
    this.right = (right===undefined ? null: right);
}



var maxDepth = function(root) {
    let maxNodes = (node, sum) => {
        if(node === null) {
            return sum;
        }

        maxNodes(root, 0);
    }
};

maxDepth();