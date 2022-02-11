//Fetch API
const result=fetch('https://swapi.dev/api/planets/')
.then((response) =>{
if(!response.ok)
 {
//  console.log('ERROR NOT STATUS: 200',response.status);
 throw new Error(`Statuc code Error: ${response.status}`);
 }
  else{
    return response.json();
  }
})
.then((data)=>{
     const filmURL=(data.results[0].films[0]);
     fetch(filmURL)
     .then((response)=>{
       return response.json();
     })
     .then((data)=>{
       console.log(data.title);
     })
     .catch((err)=>{
       console.log(`somthing went wrong ${err.status}`)
     })
})
.catch((err)=>{
  console.log('SOMETHING WENT WRONG WITH FETCH!');
  console.log(err);
});


// const req=new XMLHttpRequest();
// req.addEventListener('load',function(){
//   const data=JSON.parse(this.responseText);
// });
// req.addEventListener('error',function(){

// });
// req.open('GET','linl');
// req.send();
