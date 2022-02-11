const input=document.querySelector('#username');
input.addEventListener('keyup',function(){
  console.log('KeyUP');
});

input.addEventListener('keydown',function(){
  console.log('KeyDown');
});
input.addEventListener('keypress',function(){
  console.log('KeyPress');
});

const item=document.querySelector('#item');

const h1=document.querySelector('h1');

const ul=document.createElement('ul');
h1.appendChild(ul);
const li=document.createElement('li');
li.innerText='java';
ul.append(li);

item.addEventListener('keypress',function(e){
  if(e.key ==='Enter'){
    if(! this.value) return;
    const li=document.createElement('li');
    li.innerText= this.value;
    ul.append(li);
    this.value="";
  }
})
