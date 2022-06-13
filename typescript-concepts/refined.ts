interface Callback{
   (message:string):void
}
/*
interface Predicate{
    (x:number):boolean
}*/

type Predicate = (x:number)=>boolean  

function fun(a:Callback){
     a("india")
     console.log("Finished the function")
}

function accept(a:Predicate){
    let result=a(12)
    console.log("result is ",result)
}

accept((x)=>x%2==0)
//accept(x=>x)

fun(x=> console.log("We are processing it ",x))
