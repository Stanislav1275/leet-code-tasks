function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    let pivot: number = 0;
    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] === target) return pivot;
        else if (nums[pivot] < target) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return -1;
}

//-1, 0, 3, 5, 9, 12

export default search;