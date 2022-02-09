let flock ={
    arun:'java',
    vimal:'c++',
    giri:'python',
    kishore:'java',
    vishnu:'python'
}
let student={
    name:'arun',
    year:'3',
    intrest:'Development',
    language:['java','JavaScript'],
    country:{
        canada:'want to go',
        india:'native'
    },
    x:{
        y:1,
        z:2
    }
}
let str='arun';

// for(let c in str)
//     console.log(c);
// for(let c of str)
//     console.log(c);
// for(let k of Object.keys(flock))
// {
//     console.log(k+" loves "+flock[k]);
// }
for(let k in flock)
{
    console.log(k+" loves "+flock[k]);
}
