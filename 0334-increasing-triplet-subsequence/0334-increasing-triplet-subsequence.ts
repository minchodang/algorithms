function increasingTriplet(nums: number[]): boolean {

    let first = Infinity;
    let second = Infinity;
    let third = Infinity;
    
   for (const num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            third = num;
        }
        
        if (second !== Infinity && third !== Infinity) {
            return true;
        }
    }
    
    return false;

};