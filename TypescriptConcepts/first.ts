/* let a:string = "Ramkumar";
let age:number = 25;

class Student{

    constructor(private name:string, private college:string){

    }

    display():void{
        console.log(`My name is ${this.name} and i'm studying in ${this.college}`);
    }
}

let student1 = new Student("Ram", "Panimalar");

student1.display(); */

/* function callback(cb:(msg:string)=>string){
    let res = cb("Hello world");
    console.log(res);
}

callback(function fun(x:string):string{
    return "Hi "+x;
}) */

/* interface cb{
    (msg:string):string;
} */

/* interface bool{
    (msg:number):boolean
} */

// type predicate = (x:number)=>boolean | number;

/* function fun(x:cb){
    let res:string = x("Akash");
    console.log(res);
}

fun(data=>data); */

/* function fun1(z:bool):boolean{
   return z(20);
}


function x(y:number):boolean{
    return y%2 === 0;
}

fun1(x); */

/* interface Student{
    sno:number;
    name:string,
    age:number,
    city:string
}

function fun(s:Student):void{
    console.log(s.sno, s.name, s.age, s.city);
}

function fun1({sno,name,age,city}:Student):void{
    console.log("fun1", sno, name, age, city);
}

let obj1 = {
    sno:1,
    name:"Ram",
    age:20,
    city:"Mumbai"
}

let obj2 = {
    sno:2,
    name:"Ragu",
    age:25,
    city:"Delhi"
}

fun(obj1);
fun1(obj2); */

/* type country = {
    cId:string,
    name:string
}

class Product {

    constructor(private name:string, private price:number, private marketedCountries:Array<string>){}

    print():void{
        console.log(this.name, this.price, this.marketedCountries)
    }
}

var product=new Product("Mobile",10000, ['IND', "India"]);

product.print(); */

/* interface Tasks{
    prepare(x:string):void,
    process(y:string):void
}

class Perform implements Tasks{
    prepare(x: string): void {
        console.log("Preparing", x);
    }

    process(y: string): void {
        console.log("processed", y);
    }
}

let test = new Perform();
test.prepare("Item");
test.process("Item"); */

// Generics
function fun<T>(x:T[]):void{
    console.log(x);
};

let arr1:string[]=["Ram", "Ragu", "Rahhul"];
let arr2:number[]=[1,2,3,4,5,6,7,8];

fun<string>(arr1);
fun<number>(arr2);


















