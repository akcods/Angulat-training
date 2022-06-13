function Student(sno,name){    
    this.sno=sno;
    this.name=name;
    //console.log(this)
}

Student.prototype.show=function(){
    console.log(this.sno,"  ",this.name)
}

obj=new Student(1,"Ravi")
obj.show()


//Student(2,"ram")