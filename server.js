const fs = require('fs');
//const path = require('path');
const express = require('express');
//const { db } = require('./db/db');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/', apiRoutes);


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

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});