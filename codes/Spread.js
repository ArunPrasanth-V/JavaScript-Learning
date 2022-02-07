//setting default value :
function multiply(x,y=1)
{//To set default Value
    return x*y;
}
 

//Spread : ...
Math.min(1,34,565,78,12,45,78);
let arr=[35,64,7,12,34,90];
Math.max(...arr);
 
function giveMeFour(a,b,c,d){
    console.log('a',a)
    console.log('b',b)
    console.log('c',c)
    console.log('d',d)
}
giveMeFour(..."arun");

//speard in object literals


const feline={leg:4,family:'Felidae'};
const canine={family:'Caninae',furry:'true'};
const dog={...canine,isPet:true};
const lion={...canine,genus:'Panthera'};
const catDog={...feline,...canine};
