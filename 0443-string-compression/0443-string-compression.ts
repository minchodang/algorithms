function compress(chars:string[]):number {
 let result = [];
    let count = 1;

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else {
            result.push(chars[i]);
            if (count > 1) {
                result.push(...(count + ''));
            }
            count = 1;
        }
    }

    chars.length = 0;
    chars.push(...result);

    return chars.length;
}
