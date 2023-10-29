function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const output: number[] = new Array(n);

    // leftProducts[i]는 i번째 원소를 제외한 왼쪽 부분의 곱입니다.
    const leftProducts: number[] = new Array(n);
    leftProducts[0] = 1;
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    // rightProducts[i]는 i번째 원소를 제외한 오른쪽 부분의 곱입니다.
    const rightProducts: number[] = new Array(n);
    rightProducts[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    // 최종적으로 output 배열을 계산합니다.
    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }

    return output;
}