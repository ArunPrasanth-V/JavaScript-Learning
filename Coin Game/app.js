function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const chuck=document.querySelector("#player");
const coin=document.querySelector("#coin");

window.addEventListener('keyup',function(e){
  if(e.key =='ArrowDown' || e.key==='Down')
 {
  currTop=extractPos(chuck.style.top);
  chuck.style.top=`${currTop+50}px`;
 }

 else if(e.key =='ArrowUp' || e.key==='Up'){
  currTop=extractPos(chuck.style.top);
  chuck.style.top=`${currTop-50}px`;
  
 }

 else if(e.key =='ArrowRight' || e.key==='Right'){
  currTop=extractPos(chuck.style.left);
  chuck.style.left=`${currTop+50}px`;
  chuck.style.transform='scale(1,1)';
 }
 else if(e.key =='ArrowLeft' || e.key==='Left'){
  currTop=extractPos(chuck.style.left);
  chuck.style.left=`${currTop-50}px`;
  chuck.style.transform='scale(-1,1)';
 }
  if(isTouching(chuck,coin)){
    moveCoin();
  }
});

const extractPos = (pos) =>{
  if(!pos) return 100;
  return parseInt(pos.slice(0,-2));
}

const moveCoin=()=>{
  const y= Math.floor(Math.random()*window.innerHeight);
  const x= Math.floor(Math.random()*window.innerHeight);
  coin.style.top=`${y}px`;
  coin.style.left=`${x}px`;
}
moveCoin();
