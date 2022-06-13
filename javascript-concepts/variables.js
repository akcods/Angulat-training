/*
//javascript does not follow type checking

//a=90
//b="King"
c=true
d=32.43

//console.log(a,b,c,d)

//console.log(typeof(a),typeof(b),typeof(c),typeof(d))
a=300
//const b=89
function fun(){
    const b=90
    console.log(b)
    
    console.log(a)
    var a=500
    console.log(a)
}

console.log(a)
fun()
console.log(a)
*/

function temp(){
    var a=200;
      console.log(a)
    {
           let a=100;
           console.log("inner ",a)
    }
      console.log(a)
}

temp()
