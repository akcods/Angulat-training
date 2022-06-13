function multiParams(a, b, c) {
    console.log("Running");
    a("India");
    b(123456);
    c("France");
    console.log("Ran");
}
var param = function (x) { return console.log("received String", x); };
multiParams(param, function (y) { return console.log("Receieved Number", y); }, param);
