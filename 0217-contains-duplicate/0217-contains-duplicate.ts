function containsDuplicate(nums: number[]): boolean {
    const newArr = new Set(nums);
    return newArr.size === nums.length ? false : true;
};