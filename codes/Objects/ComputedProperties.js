//Computed Properties
const role='host';
const person='Jools Holland';
const role2="Director";
const person2="james cameron";
// const team={};
//     team[role]=person;

const team={
    [role]:person,
    [role2]:person2
}


function addProp(obj,k,v){
    return {...obj,[k]:v};
}
const hell=addProp(team,'happy',':)');
