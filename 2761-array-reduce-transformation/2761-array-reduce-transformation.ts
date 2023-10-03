type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {

    let result = init;
    for(let i =0; i<nums.length; i++){
        const reducedNumber = fn(result, nums[i]);
        result = reducedNumber;
    }
    return result;
};