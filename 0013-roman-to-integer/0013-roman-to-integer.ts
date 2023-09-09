function romanToInt(s: string): number {
    const romanObject = {
        "I" : 1,
        "V" : 5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

     let answer = 0;
     let prevValue = 0; // 이전 문자의 값 저장
    
    for(let i = s.length - 1; i >= 0; i--){
        const currentValue = romanObject[s[i]];
        
        // 이전 문자의 값이 현재 문자의 값보다 작다면 빼기 연산을 수행
        if (prevValue > currentValue) {
            answer -= currentValue;
        } else {
            answer += currentValue;
        }
        
        prevValue = currentValue; // 현재 값을 이전 값으로 저장
    }
    return answer;
};