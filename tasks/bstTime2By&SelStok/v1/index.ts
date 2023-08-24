function maxProfit(prices: number[]): number {
    let prevIndex = prices.length - 1; // запоминаем индекс элемент, где была замечена большая разница
    let dif = 0; // разница
    for (let i = prices.length - 1; i > 0; i--) {
        const cur = prices[i];
        const next = prices[i - 1];
        const tmpDif = cur - next; // текущая разница
        if (tmpDif < 0) { // если текущая разница < 0 - пропускаем
            continue;
        }
        // итерируемся с конца, перебираем элементы по двое
        const prevTmpDif = prices[prevIndex] - next; // разница с предыдущем элементом, который выдал большую разницу
        if (prevTmpDif > tmpDif && prevTmpDif > dif) {
            dif = prevTmpDif;
        } else if (dif < tmpDif) {
            dif = tmpDif;
            prevIndex = i;
        }
        // если текущий элемент больше prev, то сделать prev = cur
        if (prices[prevIndex] < cur) {
            prevIndex = i;
        }
    }
    return dif;
}

export default maxProfit;
