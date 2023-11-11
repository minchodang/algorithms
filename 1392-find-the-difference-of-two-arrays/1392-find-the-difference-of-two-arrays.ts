function findDifference(nums1: number[], nums2: number[]): number[][]{

    let new1 = [];
    let new2 = [];

    for(let item of nums1){
        const includeItem = nums2.includes(item);
        const isExistItem = new1.includes(item);
        if(!includeItem && ! isExistItem) new1.push(item);
    }
    for(let item of nums2){
        const includeItem = nums1.includes(item);
         const isExistItem = new2.includes(item);
        if(!includeItem && ! isExistItem) new2.push(item);
    }
    return [new1, new2];
};