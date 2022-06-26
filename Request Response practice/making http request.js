const re=new XMLHttpRequest();

re.addEventListener('load',function(){
    const result=JSON.parse(re.responseText);
  console.log(result);
});
re.addEventListener('error',function(){
    console.log(re.status);
});
re.open('GET',"https://swapi.dev/api/people/4/");
re.send();
