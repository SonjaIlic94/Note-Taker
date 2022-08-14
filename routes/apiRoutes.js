const fs = require('fs');
const router = require('express').Router();
const path = require('path');
const notes = require('../db/notes.json');

// read db.json files + return all saved notes
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/notes.json'))
});

//post needs to receive a new note to save
//unique ID, how can npm do this?

//post to notes page
// router.post('/api/notes', (req, res) => {
//     console.log(req.body);
//     req.body.id = notes.length.toString();
//     res.json(req.body)
//     // return finished code to post route for respose
//     return body;
// });
// app.post('/api/notes', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = animals.length.toString();

//     if (!validateAnimal(req.body)) {
//         res.status(400).send('The animal is not properly formatted.');
//     } else {
//         const animal = createNewAnimal(req.body, animals);
//         res.json(animal);
//     }
// });




module.exports = router;