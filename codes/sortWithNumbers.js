const prices=[400.50,3000,99.99,12.00,9500];
let answer1=prices.sort((a,b) => a-b);


let answer2=prices.sort(
    function (a,b)
    {
        return a-b;
    }
)
let descSort = prices.slice().sort((a,b) =>b-a);
 
