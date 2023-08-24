function Setter(target: any, key: string) {
    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    const setterName = `set${capitalizedKey}`;

    if (target.hasOwnProperty(setterName)) {
        console.warn(`Setter for ${key} already exists.`);
        return;
    }

    Object.defineProperty(target, setterName, {
        set(value) {
            this[key] = value;
        },
    });
}

export default Setter;