function createCounter(n: number): () => number {
    let initial = n;
    return function() {
        return initial++;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */