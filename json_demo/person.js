const fs = require('fs')

const person = {
    name: "fergus",
    age: 24,
    favColour: "blue",
};

//takes array above and changes to sting (flat packs)
const personJson = JSON.stringify(person);

console.log(person);

console.log(personJson);

//adds file 
fs.writeFileSync("json_demo/person.json", personJson);

//
const dataBuffer = fs.readFileSync("json_demo/person.json");
console.log(dataBuffer);

//changes to a string
const dataJson = dataBuffer.toString();
console.log(dataJson)

//changes to a js object 
const data = JSON.parse(dataJson);
console.log(data)

