function d(target: object, key: string): any {
    let val: any;
    return {
        set: function (value: any) {
            val = value;
            console.log(`Set ${key} to ${value}`);
        },
        get: function () {
            return val;
        }
    };
}

export default d;