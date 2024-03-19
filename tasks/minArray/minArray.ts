export const getMin = (arr: number[]) => {
    let min = arr[0];
    for (let el of arr) {
        if (el < min) {
            min = el;
        }
    }
    return min;
}
