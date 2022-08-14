const router = require('express').Router();
const path = require('path');
const { notes } = require('./db/db');
// include path = require path
const path = require('path');

// read db.json files + return all saved notes
router.get('/api/notes', (req, res) => {
    res.send(notes);
});

//post needs to receive a new note to save
//unique ID, how can npm do this?



module.exports = router;