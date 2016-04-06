'use strict';
const express = require('express');
let app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});


const fs = require('fs');
app.route('/')
  .get((req, res) => {
    console.log('get homepage');
    fs.readFile('./index.html', (err, data) => {
      if (err) return res.status(500).send('error retrieving index.html');
      return res.status(200).set('content-type', 'text/html').send(data);
    })
  });

app.listen(3000, () => console.log('server speaking'));
