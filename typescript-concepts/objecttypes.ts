

interface student{
   sno:number;
   name:string;
   city:string;
   interests:string[];
   
}


function processObject(s:student){
    console.log(s.sno,s.name,s.city,s.interests)
}

function processProject({sno,name,city,interests}:student){
    console.log("processed ",sno,name,city)
}

processObject({sno:1,name:"Robert",city:"Jaipur",interests:['java','css']})
processProject({sno:2,name:"Rahul",city:"Bhopal",interests:['Python','java']})