const path = require('path');
const fs = require('fs');

//function to make new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    // post to notes.json
    fs.writeFileSync(
        path.join(__dirname, './db/notes.json'),
        JSON.stringify({ note: notesArray }, null, 2)
    );
    return note;
}
//createNewNote();
//validate function to check if note is a string
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = { createNewNote, validateNote }