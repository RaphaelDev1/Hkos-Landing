const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const path = require('path');
const pdf = require("pdf-creator-node");
const fs = require("fs");
const exp = require('constants');
const cors = require('cors');

const createPdf = require('./create_pdf');

const port = process.env.PORT || 6300

app.use(express.json());
app.use(cors());


// app.use('/', express.static(__dirname + '/'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/html/page.html');
// });

// app.get('/save', (req, res) => {

//     res.render('save', { qs: req, query });
// });

app.post('/save', function (req, res) {

    console.log(req.body);

    // const Table = JSON.parse(req.body.table);
     let total = 0;
     let totalHT = 0;
    for (let el of req.body.table) {
        if (!el.montantproduct || isNaN(+el.montantproduct))
            continue;
        total += +el.montantproduct;

        if (!el.totalht || isNaN(+el.totalht))
        continue;
        totalHT += +el.totalht;
        
        
    };


    let logo = '';

    // if (req.files?.logo) {
    //     let filename = 'logo' + path.extname(req.files.logo.name);

    //     req.files.logo.mv(path.join(__dirname, 'upload', filename), (err) => {
    //         if (!err)
    //             readFile();
    //     });

    //     function readFile() {
    //         logo = fs.readFileSync(path.join(__dirname, 'upload', filename), 'base64');
    //         createPDF();
    //     }
    //  }
    // else {
    //     createPDF();
    // }


    createPDF();



    function createPDF() {
        const body = req.body;
        const html = fs.readFileSync("html/template.html", "utf8");

        const options = {
            format: "A4",
            orientation: "portrait",
            border: "10mm",
        };

        const document = {
            html: html,
            data: {
                title: 'my Doc',
                logo: logo ? 'data:image/png;base64,' + logo : '',
                name: req.body.name,
                adresse: body.adresse,
                codepostale: body.codepostale,
                ville: body.ville,
                pays: body.pays,
                code: body.code,
                telephone: body.telephone,
                email: body.email,

                clientname: body.clientname,
                clientadresse: body.clientadresse,
                clientcodepostale: body.clientcodepostale,
                clientville: body.clientville,
                clientpays: body.clientpays,
                clientcode: body.clientcode,
                clienttelephone: body.clienttelephone,
                clientemail: body.clientemail,

                facturenum: body.facturenum,
                facturedata: body.facturedate,
                numeroengagement: body.numeroengagement,
                product: body.product,
                dateproduct: body.dateproduct,
                uniteproduct: body.uniteproduct,
                quantiteproduct: body.quantiteproduct,

                htprixproduct: body.htprixproduct,
                tvaproduct: body.tvaproduct,
                montantproduct: body.montantproduct,

                totalttc: total,
                totalht: totalHT,

                messagefacture: body.messagefacture,
                limitedate: body.limitedate,
                modereglement: body.modereglement,
                table: req.body.table
            },
            path: "./output.pdf",
            type: "",
        };

        pdf
            .create(document, options)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });


        // res.send('<a href="output.pdf" download="" title="">Telecharger la facture</a>')

        res.send('ok');
    }
})


app.post('/save-doc', (req, res) => {
    const body = req.body; 

    const Data = {
        key1: body.key1,
        key2: body.key2
    }

    createPdf('template2.html', Data, () => {
        res.send('ok')
    });
})


app.listen(port, () => {
    console.log('Server running...');
});