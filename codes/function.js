// Functions :
function hello()
{
    console.log("Hello World! ");
}

hello();
function rollDie(){
    let num=Math.floor(Math.random()*6)+1;
 console.log(`${num}`);
}


//Arguments :
function add(a, b)
{
    console.log(a+b);
}

//Return Statement :
function add1(a, b)
{
    return console.log(a+b);
}


function passwordValidator(username,password)
{
    return (password.length>7 && !password.includes(' ')&& username!==password);
}


function avg(array)
{
    let sum=0;
    for(element of array)
     sum+=element;

     return sum/array.length;
}

function isPangram( word)
{
    word= word.toLowerCase()
  for(let char of'abcdefghijklmnopqrestwxyz')
  {
     if(!word.includes(char))
      return false;
  }
  return true;
}
