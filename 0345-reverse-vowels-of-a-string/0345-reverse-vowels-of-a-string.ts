function reverseVowels(s: string): string {

    let start = 0; 
    let end = s.length -1;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    const answer = [...s];

    while(start<end){
        const isIncludesStart = vowels.includes(answer[start].toLowerCase())
        const isIncludesEnd = vowels.includes(answer[end].toLowerCase())

        if(!isIncludesStart){
            start++;
        }
        if(!isIncludesEnd){
            end--;
        }
        if(isIncludesStart && isIncludesEnd){
            const temp = answer[start];
            answer[start] = answer[end];
            answer[end] = temp;
            start++;
            end--;
        }
    }
    return answer.join("");   
};