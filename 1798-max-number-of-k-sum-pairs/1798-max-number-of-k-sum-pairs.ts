function maxOperations(nums: number[], k: number): number {
    // Map을 사용하여 숫자와 해당 숫자의 빈도수를 저장할 맵을 생성
    const numCountMap = new Map<number, number>();
    
    // 최대 연산 횟수를 저장할 변수를 초기화
    let maxOps = 0;

    // 주어진 배열 'nums'를 순회
    for (const num of nums) {
        // 현재 숫자와 합이 'k'가 되는 숫자를 계산
        const complement = k - num;

        // 만약 'complement'가 이미 맵에 존재하고, 빈도수가 1 이상이라면
        if (numCountMap.has(complement) && numCountMap.get(complement) > 0) {
            // 가능한 연산 횟수를 1 증가시키고, 해당 숫자의 빈도수를 감소
            maxOps++;
            numCountMap.set(complement, numCountMap.get(complement) - 1);
        } else {
            // 그렇지 않으면 현재 숫자의 빈도수를 1 증가
            numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
        }
    }

    // 최대 연산 횟수 반환
    return maxOps;
};