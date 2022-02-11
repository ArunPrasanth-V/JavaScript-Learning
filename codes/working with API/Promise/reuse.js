
////Fetch API

const checkStatusAndParse=((response)=>{
if(!response.ok)
{
//  console.log('ERROR NOT STATUS: 200',response.status);
 throw new Error(`Status code Error: ${response.status}`);
}
else{
    return response.json();
}
});

const printName =((result)=>{
  for(let n of result)
  console.log(n.name);
});


const sentReq=((URL)=>{
  fetch(URL)
  .then((response)=>{
    return response.json();
   })
  .then((data)=>{
    for(let n of data.results)
      console.log(n.name);
      
    if(data.next){
        const nextURL=data.next;
         sentReq(nextURL);
       }
    else{
      console.log("well that all data thank's for using API");
    }
  }) 
  .catch((err)=>{
    console.log(`somthing went wrong ${err.status}`);
  })
});

sentReq('https://swapi.dev/api/planets/');


