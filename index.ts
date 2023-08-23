import mergeTwoLists, {ListNode} from "./mergeTwoSortedLists/v2";

(() => {
    console.log(
        JSON.stringify(
            mergeTwoLists(
                new ListNode(
                    1, new ListNode(2, new ListNode(4)),
                ),
                new ListNode(1, new ListNode(3, new ListNode(4)),
                ),
            ),
        ),
    );
})();
