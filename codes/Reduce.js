const nums=[3,4,5,6,7];
const product= nums.reduce((total,currentVal)=>{
    return total+currentVal;
})
const maxVal=nums.reduce((maxv,currentVal) =>{
    return Math.max(maxv,currentVal);
},0)

const votes=['y','y','n','y','n','y','n','y','n','n','y','y'];
const result=votes.reduce((tally,val)=>
{
    // tally[val]={}
    if(tally[val])
    tally[val]++;
    else
    {
        tally[val]=1;
    }
    return tally;
},{});
