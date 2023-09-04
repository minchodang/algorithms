function countBits(n: number):number[]{
    let answer = [];
    for(let i =0; i<=n; i++){
        let oneCnt = i.toString(2).split("").filter((v)=> v=== '1').length;
        answer.push(oneCnt);
    }
    return answer;
};