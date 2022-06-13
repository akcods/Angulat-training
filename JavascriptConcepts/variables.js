// function
/* function Student(name, age){
    this.name = name;
    this.age = age;
}

Student.prototype.location = "Chennai";

Student.prototype.show = function(){
    console.log("My name is "  + this.name + " ,my age is " + this.age + " and i'm from " + this.location);
}

let obj = new Student("Akash", 2.5);

obj.show(); */

// class
/* class Student{
    constructor(sno,name){
        this.sno=sno;
        this.name=name;
    }

    show(){
        console.log(this.sno,this.name)
    }
}


obj=new Student(1,"Ravi")
obj.show() */

// Arrow function

/* let b= ()=>{
    console.log("Arrow function");
}

b();

let sum=(a,b)=> a+b;

console.log(sum(1,2)); */

// Bind method

/* class Benefit{
    constructor(item){
        this.item = item;
    }

    show(){
        console.log("item", this.item);
    }

    //change(){
    //    valueProvider(function(data){
    //        this.item=data;
    //    })
    //}

    change(){
        valueProvider(data=>this.item=data);
    }
}

function valueProvider(cb){
    cb("LONDON")
};

let obj=new Benefit("India");
obj.show();
obj.change();
obj.show(); */

/* var globalObject = this;
var foo = function(){
    console.log(this);
    return this;
}; */
// console.log("Global Object is : " , globalObject);
// console.log(foo() === globalObject);

/* var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); */

// destructuring

/* let emp={
    name:"Akash",
    age:20,
    id:1
}

const{name,id:sno,age} = emp;

console.log(name,sno,age); */

/* function fun(){
    return this;
}

console.log("Function this: ",fun());

var fun1 = ()=> this;

console.log("Arrow function this: ", fun1()); */

// spread

/* const person = {
    name:"Ravi",
    id:1,
    city:"Mumbai"
}

const citizen = {...person, age:25};

console.log(person);
console.log(citizen); */

// const globalObject = this;
// console.log(globalObject);

/* function fun(){
    console.log(this);
}

fun();

var fun1=()=>{
    console.log(this);
}

fun1(); */

/* function asyncFunc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Hello")
        },1000)
    })
}

function process(cb){
    let result = cb();
    result.then((data)=>console.log(data)).catch((err)=>console.log("error is", err));
    console.log("Independent line");
}

process(asyncFunc); */

/* async function process2(){
    let res = await asyncFunc();
    console.log(res);
    console.log("Independent line");
}

process2(); */

/* console.log(this);
var globalObject = this;
console.log(globalObject);
console.log(globalObject === this); */

/* class Person {
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    fullName() {
        console.log(`Full name is ${this.firstName} ${this.lastName}`);
    }
}

const person1 = new Person("John", "Doe");
person1.fullName(); */

// let str = globalThis;
// console.log(str);

// filter
// callback for filter should return a boolean

/* let arr=["Ram","Ranjith", "Rahul", "Kaushik", "Rajendran", "Ragunanthan"];
let b = [1,2,45,65,234,456,768,98,34,123,3465,67,5687,789,98,90];

let newList1 = arr.filter(x=>x.length>4);
console.log(newList1);

let newList2 = b.filter(x=> x%2 === 0);
console.log(newList2);

let newList3 = arr.map(x=> "Hello "+x);
console.log(newList3);

let newList4 = b.reduce((x,y)=>x+y/(b.length));
console.log(newList4);
console.log(b.length);


// JSON operations
let jsonValue=[{name:"rahul",age:23},{name:"ee",age:50},{name:"dd",age:12},{name:"gg",age:28}]
let newList5=jsonValue.filter(x=>x.age>45)
console.log(newList5) */

// function declaration to function expression
// adding exclamatory mark before the function declaration and open/close round brackets at the end of the function 
// declaration converts it into function expression, which invokes the function immediately
/* let res = !function iife(){}();
console.log(res); */







