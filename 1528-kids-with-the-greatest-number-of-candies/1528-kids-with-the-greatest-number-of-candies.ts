function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {

let result = [];

const max = Math.max(...candies);
for(let item of candies){
    if(item+extraCandies >= max){
        result.push(true);
    }else{

    result.push(false);
    }

}
return result;
};