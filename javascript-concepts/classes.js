class Student{
    constructor(sno,name){
        this.sno=sno;
        this.name=name;
    }

    show(){
        console.log(this.sno,this.name)
    }
}


obj=new Student(1,"Ravi")
obj.show()