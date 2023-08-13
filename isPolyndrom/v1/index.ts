const isPolyndrom = (str: string | number): boolean => {
    // вернуть строку без всех символов, кроме русских и английский букв
    str = str.toString()
        .toLowerCase()
        .replace(/[^A-Za-zА-Яа-я]/g, "");

    return str === str.split("").reverse().join();
};
export default isPolyndrom;
