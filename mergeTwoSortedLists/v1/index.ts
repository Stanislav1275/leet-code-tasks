// Definition for singly-linked list.
export class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list1Node: ListNode = list1;
    let list2Node: ListNode = list2;
    if (!list1Node) {
        return list2Node;
    } else if (!list2Node) {
        return list1Node;
    }
    const resListNode = new ListNode(-1); // val = 0
    let resListNodeNode = resListNode;
    const getMin = (a: number, b: number) => a > b ? b : a;
    while (list1Node || list2Node) {
        if (!list1Node) {
            resListNodeNode.next = list2Node;
            break;
        } else if (!list2Node) {
            resListNodeNode.next = list1Node;
            break;
        }
        const min = getMin(list1Node.val, list2Node.val);
        if (min === list1Node.val) {
            resListNodeNode.next = list1Node;
            list1Node = list1Node.next;
        } else {
            resListNodeNode.next = list2Node;
            list2Node = list2Node.next;
        }
        resListNodeNode = resListNodeNode.next;
    }
    return resListNode.next;
}

export default mergeTwoLists;
