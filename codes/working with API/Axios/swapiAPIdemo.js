const fetchNextPlanet=((URL ='https://swapi.dev/api/planets/')=>{
  return axios.get(URL);
});

const printPlanet=(({data})=>{
  for(let planets of data.results){
    console.log(planets.name);
  }
  return Promise.resolve(data.next);
});

const retrive=fetchNextPlanet()
.then(printPlanet)
.then(fetchNextPlanet)
.then(printPlanet)
.catch((err)=>{
  console.log('there was an error',err);
});
