const isPolyndrom = (str: string): boolean => {
    // вернуть строку без всех символов, кроме русских и английский букв
    let left: number = 0;
    let right: number = str.length - 1;

    while (left < right) {
        if (str.charAt(left).toLowerCase().toUpperCase() === str.charAt(left)) {// проверка на не букву
            left++;
            continue;
        }
        if (str.charAt(right).toLowerCase().toUpperCase() === str.charAt(right)) {
            right--;
            continue;
        }
        if (str.charAt(left).toLowerCase() !== str.charAt(right).toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
export default isPolyndrom;
