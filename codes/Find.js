// const square = n=>n*n;

// console.log(square(2));

let movies=[
    'The Fantastic Mr.Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
]

let movie=movies.find(movie =>{
    return movie.includes('Mrs.');
});
console.log(movie);
let movie2=movies.find(m=>{
    return m.indexOf('Mrs.')===0;
});
console.log(movie2);
// Find only give 1st Match.
