let name='arun';
function call()
{
    console.log(name);
}
if(true)
{
    var dept="cse";
}
console.log(dept);

let num=2;
//function expression
let answer=function(num){
    return num*num;
}
 console.log(answer(num));
console.dir(answer())



function add(x,y)
{
    return x+y;
}
function sub(x,y)
{
    return x-y;
}
function mul(x,y)
{
    return x*y;
}
function div(x,y)
{
    return x/y;
}
const operations=[add,sub,mul,div];

for(let func of operations)
{
  console.log(func(10,20));
}

// Function that accept Function as the argument 
function callfun(f)
{
    f();
    f();
    f();
}
function dream()
{
    console.log("Canada!");
}
callfun(dream);


//Returning the function while calling function
function multiplyBy(num)
{
    return function (x)
    {
        return num*x;
    }
}

double=multiplyBy(2);
console.log(double(3));

function grumus(){
    alert("Hey Arun You need to go canada work hard for that!")
}
// CallBack :

//setTimeout(grumus,5000)
const btn=document.querySelector("button");
btn.addEventListener('click',grumus);
