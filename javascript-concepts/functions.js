function fun(){
    console.log("Hello world!!!!")
}

greet = fun

store=function(){
    console.log("Stay Calm!!!")
}

console.log(typeof(fun))

greet()
store()

function process(f){
   console.log("preprocessing")
   f("Pre processed daa -> rdfdfd")
   console.log("post processing")
   f("post process data -> 4343dsfed")
}

process(function(data){
    console.log("received data ->", data )
})

//a function which is passed as a parameter to another function is called callback