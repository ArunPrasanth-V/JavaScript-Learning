function call(time,word,success,fail){
    if(word.length>15){
       // console.log(word+"-"+word.length);
       // console.log('sorry we can\'t print that one :(');
        fail();
        return;
    }
    setTimeout(()=>{
      console.log(`${word}`);
      success();
    },time);
}
// call(1000,'Arun',()=>{
//     call(1000,"is a ",()=>{
//         call(1000,"BackEnd Developer ",()=>{
//             call(1000,"located in ",()=>{
//                 call(1000,"canada!!");
//             });
//         });
//     });
// });



call(1000,"Arun",()=>{
    //success
    call(1000,"developer",()=>{
        //success
        call(1000,"He can able to code At any",()=>{
            //success
        },()=>{
         //failure
        console.log("sorry word length is too larger"); 
        });
    },()=>{
        //failure
        console.log("sorry word length is too larger");
    });
    },()=>{
    //failure
    console.log("sorry word length is too larger");
});
