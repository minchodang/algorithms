function maxProfit(prices: number[]):number {
let profit = 0;
let holding = false;
    for(let i =0; i<prices.length -1; i++){
        if(!holding && prices[i]<prices[i+1]){
            holding = true;
            profit-= prices[i];
        }else if(holding && prices[i]> prices[i+1]){
            holding = false;
            profit+= prices[i];
        }
    }
    if(holding){
        profit+= prices[prices.length -1];
    }
    return profit;
};