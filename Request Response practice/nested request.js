const data={
    '/usr':[
        {name:'arun',uname:'Arun Prasanth',id:1,link:'usr/1'},
        {name:'aswin',uname:'Aswin Kumar',id:2},
        {name:'thulasi',uname:'Thulasi Raman',id:3},
        {name:'kishore',uname:'kishore',id:4},
        {name:'vimal',uname:'vimal M',id:5}
    ],
    '/usr/1':{
        name:"data['usr']['arun']['uname']",
        age:21,
        role:"Back-end developer",
        location:"canada",
        roleid:123
    },
    '/usr/5':{
        name:"data['usr']",
        age:22,
        role:"Full Stack Developer",
        location:"India",
        roleid:123
    },
    '/usr/2':{
        name:"",
        age:21,
        role:"Front-end Developer",
        location:"India",
        roleid:123
    },
    '/123':{
        tile:"Everything is Achievable Until You Believe"
    }   
}


const req=function(url){
    return new Promise((res,rej)=>{
        let record=data[url];
      if(record){
        res(record);
      }
      else{
        rej({status:404});
      }
    });
}
req('/usr').then((res)=>{
    let id=res[0].id;
    console.log(id);
    req(`/usr/${id}`).then((res)=>{
     console.log(res);
    })
})
.catch(()=>{
    console.log("Something went Wrong!!");
});
