function gcdOfStrings(str1: string, str2: string): string {
   function isDivisible(s: string, t: string): boolean {
        return s === t.repeat(s.length / t.length);
    }

    let result = "";
    for (let i = 1; i <= Math.min(str1.length, str2.length); i++) {
        if (str1.length % i === 0 && str2.length % i === 0) {
            const substring = str1.slice(0, i);
            if (isDivisible(str1, substring) && isDivisible(str2, substring)) {
                result = substring;
            }
        }
    }

    return result;        

};