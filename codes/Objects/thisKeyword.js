function sayHi(){
    console.log("Hi");
    console.log(this);
}
// var is added to global scope

const person ={
    first:"Arun",
    last :"Prasanth",
    nickName:"arunChuck",
    
    printBio(){
      const {first,last,nickName}=this;
     console.log(`${nickName} is a passionate programmer!! his origial name is ${this.fullName()}`);
    },
    fullName(){
        const {first,last,nickName}=this;
        return (`${first} ${last}`);
    },
    check(){
        console.log(this);
    }
}

const annoyer={
    phrases:['literally','cray cray',
    'i can"t even','totes!',
    'YOLO','can"t stop','Won"t stop'],
    start(){
      const idx=Math.floor(Math.random()*this.phrases.length);
      return this.phrases[idx];
    }
};
