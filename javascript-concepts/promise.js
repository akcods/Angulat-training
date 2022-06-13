//Javascript is asynchronous in nature & non blocking
function asyncfun(){

  return new Promise(function(resolve,reject){
    setTimeout(()=>{
       let x=Math.round(Math.random()*1000)
       if(x%2==0)
        resolve("hello")
       else
        reject("hell")
    },1000)
  })
}
function process(){
result=asyncfun()
result.then((data)=>console.log(data),(err)=>console.log("error is",err))
console.log("indepedent line")
}

async function process2(){
    try{
    let data=await asyncfun()
    console.log(data)
    }
    catch(e){
        console.log("error is",e)
    }
}


process2()