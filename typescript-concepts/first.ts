var a:string="raj";
var b:number=234;

class Student{
    private sno:number;
    private name:string;
    
    constructor(sno:number,name:string){
        this.sno=sno;
        this.name=name;
    }

    display():void{
        console.log(this.sno,this.name)
    }
}


var one=new Student(12,"Raj")