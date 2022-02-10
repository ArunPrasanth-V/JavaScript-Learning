const btn=document.querySelector("#clicker");

btn.addEventListener('click',function(){
    btn.innerText=('Yeah! you Clicked!!!');
});
btn.addEventListener('mouseover',function(){
    btn.innerText=('click here to go canada !');
});
btn.addEventListener('mouseout',function(){
    btn.innerText=('click');
});
