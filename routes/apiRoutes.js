const fs = require('fs');
const router = require('express').Router();
const path = require('path');
const notes = require('../db/notes.json');
const validate = require('../assets/js/validateNote.js');

// get notes from db.json
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/notes.json'))
});

//post to notes page
router.post('/api/notes', (req, res) => {
    console.log(req.body);

    // create a modal, needs to reflect what is coming in (title&text) and also unique ID
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 30)
    }
    notes.push(newNote);
    fs.writeFileSync(
        './db/notes.json',
        JSON.stringify(notes, null, 2)
    );
    res.json(notes);
    // return finished code to post route for respose
    return body;
});

module.exports = router;