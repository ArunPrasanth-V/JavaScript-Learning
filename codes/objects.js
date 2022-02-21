// object's

//object literals
const student={
    name:"Arun",
    dept:"CSE",
    year:3,
    passion:"Development",
    programming:['java','javaScript']
};
console.log(student.name,student.dept);

// here all keys are automatically converted into string
const number={
    num:"one hundred",
    "16":"sixteen"
};
number['10']='ten';

const stu={
    firstName:'arun',
    lastname:"chuck",
    strengths:student.passion,
    exams:{
        midterm:92,
        final:88
    }
};


let avg =(stu.exams.final + stu.exams.midterm)/2;
