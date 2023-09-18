function removeElement(nums: number[], val: number): number{
     let k = 0; // k는 val과 일치하지 않는 요소의 개수를 나타냅니다.

    // 배열을 순회하면서 val과 일치하지 않는 요소를 nums 배열의 앞쪽으로 이동시킵니다.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // val과 일치하지 않는 요소를 nums[k] 위치로 이동
            k++;
        }
    }

    return k; // val과 일치하지 않는 요소의 개수 k를 반환
};