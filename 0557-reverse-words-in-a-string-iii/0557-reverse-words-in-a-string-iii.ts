function reverseWords(s: string): string{
    const splittedString = s.split(" ");
    let resultString = "";
    for(let item of splittedString){
        let reversed = item.split("").reverse().join('');
        resultString+= reversed+" ";
    }
   return resultString.trim();
};