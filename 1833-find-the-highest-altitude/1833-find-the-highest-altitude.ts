function largestAltitude(gain: number[]): number{
    let arr = [0];
    let alt = 0;

    for(let i = 0; i<gain.length; i++){
        let item = gain[i];
        alt+= item;
        arr.push(alt);
    }

    return Math.max(...arr);


};