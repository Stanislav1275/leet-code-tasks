function twoSum(nums: number[], target: number): number[] {
    const difs = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const dif = target - cur;
        if (difs.get(cur) || difs.get(cur) === 0) {
            return [i, difs.get(cur)];
        }
        difs.set(dif, i);
    }
}

export default twoSum;
