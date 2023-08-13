const isPolyndrom = (str: string | number): boolean => {
    // вернуть строку без всех символов, кроме русских и английский букв
    str = str.toString()
        .toLowerCase()
        .replace(/[^A-Za-zА-Яа-я]/g, "");

    let left: number = 0;
    let right: number = str.length - 1;

    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
export default isPolyndrom;
