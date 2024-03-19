import {TreeNode} from "./invertBinaryTree/v1";
import {useAes} from "./aes";


let t = new TreeNode(6,
    new TreeNode(2,
        new TreeNode(0, null),
        new TreeNode(4,
            new TreeNode(3, null),
            new TreeNode(5, null),
        ),
    ),
    new TreeNode(8,
        new TreeNode(7, null),
        new TreeNode(9, null),
    ),
);
// let t1 = new TreeNode(2, new TreeNode(1, null), null);
// const arr = [2, 2, 4, 1];
// const linkedList = new LinkedNode<number>(1, new LinkedNode<number>(2, null));
// const start = linkedList;
// const {crypt, decrypt} = useCezarCrypt(1);
const {encrypt} = useAes('aboba');
(() => {
    console.log(
        encrypt('aboba')
    )

    // const cry = crypt("aboba");
    // console.log(cry)
    // console.log(decrypt(cry))
    // console.log(getMin(arr))
    // console.log(getNFib(7))
    // linkedList.append(3);
    // console.log(
    //     linkedList.contains(2)
    // )

    // console.log(linkedList)
    // console.log(linkedList.size())
    // console.log(lowestCommonAncestor(t1, t1.left, t1));
    // linkedList.removeByIndex(2)
    // console.log(linkedList)

})();
