function processObject(s) {
    console.log(s.sno, s.name, s.city, s.interests);
}
function processProject(_a) {
    var sno = _a.sno, name = _a.name, city = _a.city, interests = _a.interests;
    console.log("processed ", sno, name, city);
}
processObject({ sno: 1, name: "Robert", city: "Jaipur", interests: ['java', 'css'] });
processProject({ sno: 2, name: "Rahul", city: "Bhopal", interests: ['Python', 'java'] });
