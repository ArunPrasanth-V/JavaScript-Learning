const r=new XMLHttpRequest();
r.addEventListener('onload',function (res){
    console.log(res.responseText);
});
r.addEventListener('error',function (err){
    console.log(err);
});

r.open('GET','https://swapi.dev/api/films/1/');
r.send();
