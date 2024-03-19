export const getNFib = (index: number) => {
    let prev = 0;
    let next = 1;
    for (let i = 0; i < index - 1; i++) {
        let tmp = next
        next += prev;
        prev = tmp;
    }
    return prev;
}
