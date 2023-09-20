function minOperations(nums: number[], x: number): number {
      const total = nums.reduce((a, b) => a + b, 0);
    let n = nums.length;
    let maxLen = -1;
    let current = 0;

    for (let start = 0, end = 0; end < n; end++) {
        current += nums[end];
        while (current > total - x && start <= end) {
            current -= nums[start];
            start += 1;
        }
        if (current === total - x) {
            maxLen = Math.max(maxLen, end - start + 1);
        }
    }
    
    return maxLen !== -1 ? n - maxLen : -1;

};