

module.exports = {
    addNote
}

//try catch will try run code in try block, if any errors itll catch and run code in catch 
const fs = require ("fs");

const addNote = myNotes => {
    const allNotes = loadNotes();
    allNotes.push({reminder: myNotes});
    saveNotes(allNotes);
};

const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync("src/notes.json");
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
    } catch (error) {
        return [];
    }
};

const saveNotes = allNotes => {
    const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync("src/notes.json", notesJson)
}