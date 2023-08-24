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
    let list1Node: ListNode = list1; // указатель на list1
    let list2Node: ListNode = list2; // указатель на list2
    if (!list1Node) {
        return list2Node; // если нода пустая - вернуть "кусок" от другой и всё на этом
    } else if (!list2Node) {
        return list1Node;
    }
    const resListNode = new ListNode(); // val = 0 //нода-результат
    let resListNodeNode = resListNode; // нода-указатель для погружения в ноду-результат
    while (list1Node && list2Node) { // пока одна из нод не пустая
        // находим минимум и смещаем указатель нужной ноды,
        // записываем в указатель значение, оно передастся по ссылке в res-ноду
        if (list1Node.val < list2Node.val) {
            resListNodeNode.next = list1Node;
            list1Node = list1Node.next;
        } else {
            resListNodeNode.next = list2Node;
            list2Node = list2Node.next;
        }
        // смещаем указатель, "погружаясь" в ноду
        resListNodeNode = resListNodeNode.next;
    }
    // остаток просто "приклеиваем"
    if (!list1Node) {
        resListNodeNode.next = list2Node;
    } else if (!list2Node) {
        resListNodeNode.next = list1Node;
    }
    return resListNode.next;
}

export default mergeTwoLists;
