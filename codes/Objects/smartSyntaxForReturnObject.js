const reviews=[4.5,5.0,3.44,2.8,3.5,4.0,3.5];

const getStats=(arr) =>{
    const max=Math.min(...reviews);
    const min=Math.max(...reviews);
    const sum=arr.reduce((l,c)=>l+c);
    const avg=sum/arr.length;
    // return{
    //     max:max,
    //     min:min,
    //     sum:sum,
    //     avg:avg
    // }
    return{
        max,
        min,
        sum,
        avg
    }
}
const stats=getStats(reviews);
