function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) {
            return true; // 빈 문자열은 어떤 문자열의 부분 문자열입니다.
        }
    let sPointer = 0; // 문자열 s의 포인터
    let tPointer = 0; // 문자열 t의 포인터
    while(tPointer< t.length){
        if(s[sPointer] === t[tPointer]){
            sPointer++;
            if(sPointer === s.length){
                return true;
            }
        }
        tPointer++;
    }
    return false;
};