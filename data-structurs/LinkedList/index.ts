import LinkedNode from "./modules/LinkedNode";

class LinkedList<ValueType> {
    constructor() {
        this._header = null;// голова
        this._tail = null; // указатель на конец
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
        const node = new LinkedNode<ValueType>(value, this.header);

        this.header = node;
        if (!this.tail) {
            this.tail = node;
        }// если хвост - пуст - у нас нет нод в листе, значит назначить голову - хвостом
        return this;
    }


    public append(value: ValueType) {
        const node = new LinkedNode<ValueType>(value);
        if (!this.header) {
            this.tail = node;
            this.header = node;
            return this;
        }
        this._tail.next = node;
        this.tail = node;
        return this;
    }

    public toArray(): Array<ValueType> {
        let headNode: LinkedNode<ValueType> = this.header;
        let arr: Array<ValueType> = [];
        while (headNode) {
            arr.push(headNode.value);
            headNode = headNode.next;
        }
        return arr;
    }

    private _addNode = (node: LinkedNode<ValueType>) => {
        if (!this.header) {
            this.header = node;
        } else {
            this._header.next = node;
        }
    }

}


export default LinkedList;