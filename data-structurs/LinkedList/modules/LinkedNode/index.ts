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

    public size(): number {
        let i = 1;
        this.doSomething((cur) => {
            i++
        })
        return i;
    }

    public removeByIndex(n: number): void {
        let i = 1;
        let next = this._next;
        this.doSomething((cur) => {
            if (i === n - 1) {
                return;
            }
            next = next.next;
            i++;
        })
        console.log(next)
        next = next?.next ?? null;
        // console.log(c)
        // c.next = c?.next?.next ?? null;
    }

    public append(value: ValueType): void {
        let curNext = this._next;
        while (curNext) {
            if (!curNext.next) {
                break;
            }
            curNext = curNext._next;
        }
        const newNode = new LinkedNode(value, null)
        curNext.next = newNode;
    }

    public contains(value: ValueType): boolean {
        let curNext = this._next;
        if (this.value === value) return true;
        while (curNext.next) {
            console.log(curNext)
            if (curNext === value) return true;
            curNext = curNext.next;
        }
        return false;
    }

    public setNext(next: LinkedNode<ValueType>) {
        this._next = next;
    }

    public toString(): string {
        return `${this._value}`;
    }

    private doSomething(startFn: (cur: LinkedNode<ValueType>) => void, endFn?: (cur: LinkedNode<ValueType>) => void) {
        let curNext = this._next;
        while (curNext) {
            startFn(curNext)
            if (!curNext.next) {
                break;
            }
            curNext = curNext._next;
        }
        endFn?.(curNext);
    }

}

export default LinkedNode;
