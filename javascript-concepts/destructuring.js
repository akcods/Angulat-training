emp={
    sno: 1,
    name: "Ravi",
    city: "Chennai"
}

console.log(emp.sno,emp.name,emp.city)

console.log(emp)

member=emp
console.log(member)

console.log(emp==member)
member.desig="manager"
console.log(member)
console.log(emp)

var {sno:id,name,city,desig}=emp

//name="raj"
console.log(id,name,city,desig)

function check({a,b,c}){
    console.log(a,b,c)
}

check({a:1,b:2,c:3})