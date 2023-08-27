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


function invertTree(root: TreeNode | null): TreeNode | null {
    return !root ? null : new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
}

//решение изменяет входные данные - отстой


export default invertTree;