function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let flowerCnt = n;

    if(!flowerCnt){
        return true;
    }

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const prev = i === 0 ? 0 : flowerbed[i - 1];
            const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];

            if (prev === 0 && next === 0) {
                flowerbed[i] = 1;
                flowerCnt--;
            }
        }
        if (flowerCnt === 0) {
            return true;
        }
    }

    return flowerCnt === 0;
}
