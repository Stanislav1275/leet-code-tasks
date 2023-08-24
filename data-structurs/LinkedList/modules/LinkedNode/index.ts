class LinkedNode<ValueType> {
    constructor(value: ValueType, next: LinkedNode<ValueType> | null = null) {
        this._value = value;
        this._next = next;
    }

    private _next?: LinkedNode<ValueType>;

    public get next(): LinkedNode<ValueType> {
        return this._next;
    }

    public set next(next: LinkedNode<ValueType>) {
        this._next = next;
    }

    private _value: ValueType;

    public get value(): ValueType {
        return this._value;
    }

    public set value(value: ValueType) {
        this._value = value;
    }

    public setNext(next: LinkedNode<ValueType>) {
        this._next = next;
    }


    public toString(): string {
        return `${this._value}`;
    }


}

export default LinkedNode;