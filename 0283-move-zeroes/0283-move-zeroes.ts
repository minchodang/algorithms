/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

  let nonZeroIdx = 0;

    // 0이 아닌 요소들을 순차적으로 앞으로 옮기기
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIdx] = nums[i];
            nonZeroIdx++;
        }
    }

    // 나머지 위치에 0 추가
    for (let i = nonZeroIdx; i < nums.length; i++) {
        nums[i] = 0;
    }
    
};