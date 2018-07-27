const express = require('express');
const server = express();
const MY_KEY = require('./config.js');
const fetch = require('node-fetch');

server.use(express.json());

server.get('/places/:place', (req,res) => {
  fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${MY_KEY}&input=${req.params.place}&inputtype=textquery&fields=formatted_address`)
    .then(res => res.json())
    .then(body => res.status(200).send({"test":"here", "result":body}))
    .catch(err => console.log("Here's an error", err));


});

server.listen(8000, () => console.log(`App is listening, Google Away...`));
