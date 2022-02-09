// call back

// setTimeout(function(){
//     console.log("What happen to you you're not bring the data");
     
// },3000);

// call back on Arrays
const nums=[96,86,47,456,235,124,33,2,1];

const odds=nums.filter((n)=>{
    return n%2==1;
});
const evens=nums.filter((n)=>{
   return n%2==0;
});

const str="85501280";
const result=str.split("").reduce((tally,cur) =>{
    if(tally[cur]){
        tally[cur]++;
    }
    else{
     tally[cur]=1;
    }

     return tally;
},{});

let count=0;
for(let key in result)
{
   if(result[key]<2)
     count++;
    if(count>1)
      break;
}
if(count>1)
{
    console.log("It won't the palidrom");
}
else{
  console.log("It can be a Palindrome")
}
