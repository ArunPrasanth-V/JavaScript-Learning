
const programming=[
    'java',
    'javascript',
    'python',
    'kotlin',
    'go'
];

const [gold,silver,bronze]=programming;
const [fst,,trd]=programming;
const[winnner,...others]=programming;

const runner={
    first:'Arun',
    last:'programmer',
    country:'canada',
    title:"Arun Work hard for that !!"
}

const{first:name,last:passion}=runner;

const {first,last,...rest}=runner;
