function fun(a) {
    a("india");
    console.log("Finished the function");
}
function accept(a) {
    var result = a(12);
    console.log("result is ", result);
}
accept(function (x) { return x % 2 == 0; });
//accept(x=>x)
fun(function (x) { return console.log("We are processing it ", x); });
