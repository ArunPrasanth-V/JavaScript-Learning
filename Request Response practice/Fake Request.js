const db= function(url){
      return new Promise((res,rej)=>{
        const page={
            '/usr':{
                name:"Thulasi",
                role:"SF Developer",
                CTC:"1cr"
            },
            '/dev':{
                'java':"developer",
                'could':"DEVOPS Engineer",
                'salesForce':"wasting there time"
            }
        }
        const record=page[url];
       // console.log(record);
        if(record)
          res(record);
        else{
            rej({status:404});
        }
    });
}

db('/usr').then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.status);
});
