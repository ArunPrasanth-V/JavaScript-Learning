const words=['dog','dig','log','bag','wag'];


//every
const all3Lets= words.every(word =>word.length ===3);


const allEndIng=words.every(
    word =>{
        return word[word.length-1]==='g';
    }
);

//some
const somelen3=words.some(
    word =>{
        return word.length ===3;
    }
);
