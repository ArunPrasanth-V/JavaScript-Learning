function manualAdd(x,y)
{
  return new Promise((resolve,reject)=>{
    if(typeof(x) !=='number' || typeof(y) !=='number')
    {
      reject('X and Y must be a Number!!');
    }
    resolve(x+y);
  });
}


async function add(x,y)
{
  if(typeof(x) !=='number' || typeof(y) !=='number')
  {
    throw 'X and Y must be a Number!!';
  }
  return x+y;
}
manualAdd(2,4)
.then((val)=>{
  console.log("PROMISE RESOLVED WITH ",val);
})
.catch((err)=>{
  console.log('PROMISE REJECTED WITH ',err);
});
