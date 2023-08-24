// function isAlphanumeric(code: number) {
//     // digits: 48-57
//     // lowercase letters: 97-122
//     return ((code >= 48 && code <= 57) || (code >= 97 && code <= 122))
// }
const isPolyndrom = (str: string): boolean => {
    // вернуть строку без всех символов, кроме русских и английский букв
    let left: number = 0;
    let right: number = str.length - 1;
    str = str.toString().toLowerCase();
    while (left < right) {
        if (
            str.charAt(left).toUpperCase() === str.charAt(left)
            &&
            !(str.charAt(left) >= "0" && str.charAt(left) <= "9")
        ) {// проверка на не букву
            left++;
            continue;
        }
        if (
            str.charAt(right).toUpperCase() === str.charAt(right)
            &&
            !(str.charAt(right) >= "0" && str.charAt(right) <= "9")
        ) {
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
