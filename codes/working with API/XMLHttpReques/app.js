const firstReq =new XMLHttpRequest();
firstReq.addEventListener('load',function (){
  console.log('IT Working!!');
  const data= JSON.parse(this.responseText);
  const filmURl=(data.results[0].films[0]);
  const filmReq=new XMLHttpRequest();
  filmReq.addEventListener('load',function(){
    const filmdata=JSON.parse(this.responseText);
    console.log(filmdata.title);
  });

  filmReq.addEventListener('error',function(e){
    console.log("It's Error",e);
  });
  filmReq.open('GET',filmURl);
  filmReq.send();
  console.log('Sending 2nd request!');
  // for(let planet of data.results)
  // {
  //   console.log(planet.name);
  // }

});
firstReq.addEventListener('error',()=>{
  console.log('ERROR!!!!!');
});
firstReq.open('GET','https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');


