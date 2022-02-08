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
