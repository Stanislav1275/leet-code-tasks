import invertTree, {TreeNode} from "./invertBinaryTree/v1";

const t = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(6)),
    new TreeNode(3, new TreeNode(5), new TreeNode(7))
);

(() => {

    const t1 = invertTree(t)
    console.log(t1 == t)
    console.log(t1.left.left == t.left.left)

})();
