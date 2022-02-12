async function getPlanets(){
  try{
    const res=await axios.get('https://swapi.dev/api/planetss/');
    console.log(res.data);
  }
  catch(e){
    console.log("Somthing went Wrong!!",e);
  }
}

 getPlanets()
