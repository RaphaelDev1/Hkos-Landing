const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const path = require('path');
const pdf = require("pdf-creator-node");
const fs = require("fs");
const exp = require('constants');
const cors = require('cors');


const port = process.env.PORT || 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


app.use(express.json());
app.use(cors());

app.use('/', express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/dist'));
app.use('/api', express.static(__dirname + '/dist'));
app.use('/upload', express.static(__dirname + '/upload'));



app.post('/save-devis', require('./routes/user.routes'));
app.post('api/save-devis', require('./routes/user.routes'));
app.post('/save-facture', require('./routes/user.routes'));
app.post('/save-contrat', require('./routes/user.routes'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

app.listen(port, () => {
    console.log('Server running...');
});