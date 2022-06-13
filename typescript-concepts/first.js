var a = "raj";
var b = 234;
class Student {
    constructor(sno, name) {
        this.sno = sno;
        this.name = name;
    }
    display() {
        console.log(this.sno, this.name);
    }
}
var one = new Student(12, "Raj");

