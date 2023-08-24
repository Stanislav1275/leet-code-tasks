import LinkedNode from "./modules/LinkedNode";

class LinkedList<ValueType> {
    constructor() {
        this._header = null;
        this._tail = null;
    }

    private _tail: LinkedNode<ValueType>

    get tail(): LinkedNode<ValueType> {
        return this._tail;
    }

    set tail(value: LinkedNode<ValueType>) {
        this._tail = value;
    }

    private _header: LinkedNode<ValueType>

    public get header() {
        return this._header;
    }

    private set header(header: LinkedNode<ValueType>) {
        this._header = header;
    }

    public toString = (): string => {
        return `head:${this._header};tile:${this._tail}`;
    }

    /**
     * @description
     * * присоединить к голове
     * */
    public prepend(value: ValueType) {
        const node = new LinkedNode<ValueType>(value, this._header);
        this.header = node;
        if (!this.tail) {
            this.tail = node;
        }// если хвост - пуст - у нас нет нод в листе, значит назначить голову - хвостом
        return this;
    }

    public toArray(): Array<ValueType> {
        let headNode: LinkedNode<ValueType> = this.header;
        const arr: Array<ValueType> = [];
        while (headNode) {
            arr.push(headNode.value);
            headNode = headNode.next;
        }
        return arr;
    }

    private _addNode = (node: LinkedNode<ValueType>) => {
        if (!this._header) {
            this.header = node;
        } else {
            this._header.next = node;
        }
    }

}


export default LinkedList;