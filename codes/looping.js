// Loops :


//1 for Loopd:
for(let i=0;i<10;i++)
{
    console.log(i);
}
let m=0;
while(m++<10){
    console.log("m ->",m); 
}

for(let i=0;i<10;i++)
{
    for(let j=10;j>i;j--)
    {
        console.log(`${i} `);
    }
    console.log();
} 
// For .. of
let programming=['java','javascript','python','html & css'];

for(let parse of programming)
{
    console.log(parse);
}
// for .. in 
for(let parse in programming)
{
    //use in properties
    console.log(parse);
}
