//forEach
const number=[20,23,34,14,13,46,68,98];

number.forEach(function (num){
    console.log(num);
});


//call standalone function

function printtriple(num)
{
  console.log(num*3);
}

// number.forEach(printtriple);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

books.forEach(function(books)
{
    console.log(books.title);
    //console.log(books.authors);
    books.authors.forEach(
        function (name){
            console.log(name);
        }
    );
    console.log(books.rating);
});

for(let book of books)
{
    console.log(book.title.toUpperCase());
}
