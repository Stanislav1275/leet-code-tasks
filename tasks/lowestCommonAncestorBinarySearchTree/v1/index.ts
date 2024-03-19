export class TreeNode {
    public val: number
    public left: TreeNode | null
    public right: TreeNode | null

    public constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (p.left === q || p.right === q) {
        return p;
    } else if (q.left === p || q.right === p) {
        return q;
    }
    const RMQ = (root: TreeNode | null) => {
        if (!root) {
            return;
        }
        RMQ(root.left)
        RMQ(root.right)
    }

}


export default lowestCommonAncestor;