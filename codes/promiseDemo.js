const willGetADog =(()=>{
  return new Promise((resolve,reject)=>{
    const rand=Math.random();
    if(rand<0.5) 
    resolve();
    else
    reject();
  });
}) ;

willGetADog().then(()=>{
  console.log('Yeah! you get that!');
}).catch(()=>{
  console.log('Score more to get the Dog!');
});
