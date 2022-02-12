
//sequencial request.
// async function get3Pokemon(){
//   const poki=await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poki2=await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const poki3=await axios.get('https://pokeapi.co/api/v2/pokemon/3');

//   console.log(poki.data);
//   console.log(poki2.data);
//   console.log(poki3.data);
// }

//awaiting in parallel
async function get3Pokemon(){
  const prom= axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2= axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3= axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const results=await Promise.all([prom,prom2,prom3]);
  console.log(results);
}
get3Pokemon();


// function changeBodyColor(color,delay){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       document.body.style.background=color;
//       resolve();
//     },delay);
//   });
// }

// async function lightShow(){
//   await changeBodyColor('teal',1000);
//   await changeBodyColor('pink',1000);
//   await changeBodyColor('indigo',1000);
//   await changeBodyColor('violet',1000);
// }
// lightShow();


// async function lightShow(){
//   const p1= changeBodyColor('teal',1000);
//   const p2= changeBodyColor('pink',1000);
//   const p3= changeBodyColor('indigo',1000);
//   const p4= changeBodyColor('violet',1000);
//   await p1;
//   await p2;
//   await p3;
//   await p4;
// }

// lightShow();
