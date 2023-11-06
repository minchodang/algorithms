function findMaxAverage(nums: number[], k: number): number {
      let maxAverage = Number.NEGATIVE_INFINITY;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    for (let i = k; i < nums.length; i++) {
        maxAverage = Math.max(maxAverage, currentSum / k);
        currentSum += nums[i] - nums[i - k];
    }

    maxAverage = Math.max(maxAverage, currentSum / k);

    return maxAverage;
};