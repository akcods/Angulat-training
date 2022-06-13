person={sno:1,name:"ravi",city:"mumbai"}

//citizen=person

//citizen.age=30

console.log(person)
console.log(person)
citizen={}
console.log("***************************************")
for(let x in person) {
    console.log(x,person[x])
    citizen[x]=person[x]
    console.log(citizen)
}
console.log("***********************************")
console.log(citizen)
citizen.age=30
console.log(person)
console.log(citizen)

human={...person,state:'Maharashtra'}
console.log(human)
console.log(person)
x=[1,2,3]
b=[...x,{...person,name:"Roger"}]
console.log(b)