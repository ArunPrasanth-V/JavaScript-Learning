// Map 
const numbers=[22,3,4,56,,78,90,13];
const texts=['rofl','lol','omg','ttyl'];

const caps=texts.map(function(t){
    return t.toUpperCase();
})
console.log(caps);

const double=numbers.map(
    function (n){
        return n*2;
    }
);

const numDetails=numbers.map(function(n){
    return {
        value:n,
        isEven: n%2===0
    }
});
console.log(numDetails);

const newtexchar=texts.map(
    function(word)
    {
        return word.toUpperCase().split("").join(".");
    }
);
console.log(newtexchar);
