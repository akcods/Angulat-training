a=["rahul","Rajan","Ranjith","Krishna","Ram","Rajeev","Nakul","Das","Harsha"]

newlist = a.filter(x=>x.length>5) //callback for filter must return boolean

b=[34,356,34,50,346,467,35,645,734,3450,34,36,7]

newlist2 =b.filter(x=>x%5==0)

console.log(newlist)
console.log(newlist2)

//map callback must return a value

newlist3 = b.map(x=>"Hello "+x)
console.log(newlist3)

//reduce function callback must have two parameters and one return value
//first iteration first two values of array will be passed as input to the callback 
//from next iteration the previous iteration result and next element will be passed
//as parameter to next iteration

result = b.reduce((x,y)=>x>y?x:y)

console.log(result)