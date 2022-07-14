const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const path = require('path');
const pdf = require("pdf-creator-node");
const fs = require("fs");
const exp = require('constants');
const cors = require('cors');


const port = process.env.PORT || 6300

app.use(express.json());
app.use(cors());

app.use('/', express.static(__dirname + '/dist'));
app.use('/upload', express.static(__dirname + '/upload'));


app.post('/save-devis', require('./routes/user.routes'));
app.post('/save-facture', require('./routes/user.routes'));

app.use('/save-contrat', require('./routes/user.routes'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

app.listen(port, () => {
    console.log('Server running...');
});