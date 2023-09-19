function lengthOfLastWord(s: string): number{
    const splittedArr = s.trim().split(" ");
    return splittedArr[splittedArr.length -1].length;
};