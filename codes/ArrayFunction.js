//Arraw Function

//working with array
let number=[1,2,3,4,5,6,6,7,8];
//Map
let multiByTwoMap= number.map(
    function(num)
    {
        return num*2;
    }
);
console.log(multiByTwoMap);


//ArrayFunction :
let mutibyArrow=number.map((number)=>{
    return number*2;
});
console.log(mutibyArrow);


//working with single value
let value=num=>{
    return num*num;
}
//normal way
let value2=function (num){
    return num*num;
}
console.log(value(2));
console.log(value2(2));

 const multiy=(x,y)=>{
     return x*y;
 }
 console.log(multiy(2,3));
