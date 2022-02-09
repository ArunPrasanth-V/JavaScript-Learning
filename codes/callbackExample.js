// call back

// setTimeout(function(){
//     console.log("What happen to you you're not bring the data");
     
// },3000);

// call back on Arrays
const nums=[96,86,47,456,235,124,33,2,1];

const nums1=nums.forEach(function (n){
    console.log(n);
});
const nums2=nums.map(function (n){
    //console.log(n);
    return (n+"").split("").join("=");
});

const nums3=nums.map((n)=>{
    //console.log(n);
    return (n+"").split("").join("- -");
});

const nums4= (n) => {
    //console.log(n);
    return (n+"").split("").join("- -");
};

const isEven =(n)=>{
    return n%2==0;
}

const greet=(name)=>{
    return `Hi! ${name}`;
}
