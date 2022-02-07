
//REST : ...
Math.min(1,34,565,78,12,45,78);
let arr=[35,64,7,12,34,90];
Math.max(...arr);

function sum(...x)
{
    for(let c of x)
    {
        console.log(c);
    }
}
sum(arr);
 
const multiply = (...num) =>{
    return num.reduce((total,cur)=>total*cur);
}
