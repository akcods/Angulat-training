interface CallbackString{
    (x:string):void
}

interface CallbackNumber{
    (x:number):void
}

function multiParams(a:CallbackString,b:CallbackNumber,c:CallbackString){
   console.log("Running")
   a("India")
   b(123456)
   c("France")
   console.log("Ran")
}

let param=(x:string)=>console.log("received String",x)
multiParams(
    param,
    y=>console.log("Receieved Number",y),
    param
)