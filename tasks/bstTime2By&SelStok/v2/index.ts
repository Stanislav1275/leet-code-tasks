function maxProfit(prices: number[]): number {
    let dif = 0; // разница
    let min = prices[0];
    for (let i = 1; i < prices.length; ++i) {
        const cur = prices[i];
        if (cur < min) {
            min = cur;
        } else {
            dif = Math.max(dif, cur - min);
        }
    }
    return dif;
}

export default maxProfit;
