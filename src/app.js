const yargs = require ("yargs");
const {addNote} = require("../utils/notes.js");

const command = process.argv[2];
console.log(process.argv);
console.log(yargs.argv);

if (command == "add") {
    console.log("adding a note");
    addNote (yargs.argv.note);
}else if (command == "list"){
    console.log("listing all notes")
}else if (command == "remove"){
    console.log("removing a note")
}else{
    console.log("command not recognised");
}