function fun(sno, name) {
    if (sno % 2 == 0)
        return sno + "";
    else
        return name;
}
fun(1, "Raj");
function callit(x) {
    console.log("fun started running");
    x("Industry");
}
function callme(x) {
    console.log("callme called");
    var fact = x("India");
    console.log(fact);
}
callme(function (x) { return "Fact " + x; });
//callit(23)
//callit("raj")
callit(function (x) {
    console.log(x);
});
