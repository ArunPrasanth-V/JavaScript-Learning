const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
];


//const [,{country}]=results;
const [,silvermedel]=results;
const{country}=silvermedel;


const fullName=({first,last})=>{
    return `${first} ${last}`;
}

const runner={
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }

fullName(runner);
