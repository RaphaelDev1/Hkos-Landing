const createPdf = require('../services/create_pdf');
const Model = require('../models/generateurData');


module.exports = {
  devisGenerateur(req, res)
  {
   
      createPdf.create('template-devis.html', req.body, () => {
          res.send('ok')
      });             
  
  },

  factureGenerateur(req, res)
  {
      createPdf.create('template-facture.html', req.body, () => {
          res.send('ok')
      });             
   
  },

  contratGenerateur (req,res) {
    const body = req.body; 
    const Data = {

        contratnom: body.contratnom,
        contratprenom: body.contratprenom,
        contratdn: body.contratdn,
        contratln: body.contratln,
        contratadresse: body.contratadresse,

        contratss: body.contratss,
        contratcni: body.contratcni,
        contratdcni: body.contratdcni,
        contraths: body.contraths,
        contratsb: body.contratsb,

        contratgrade: body.contratgrade,
        contratpost: body.contratpost,
        contratdemarrage: body.contratdemarrage,
        contratfin: body.contratfin,
        contratsignature: body.contratsignature,

        contratdatefonction : body.contratdatefonction,

    }
    createPdf.create('template-contrat.html', Data, () => {
        res.send('ok')
    });
  },



}





// const Table = JSON.parse(req.body.table);
      //  let total = 0;
      //  let totalHT = 0;
      // for (let el of req.body.table) {
      //     if (!el.montantproduct || isNaN(+el.montantproduct))
      //         continue;
      //     total += +el.montantproduct;
  
      //     if (!el.totalht || isNaN(+el.totalht))
      //     continue;
      //     totalHT += +el.totalht;
      // };
      // let logo = '';
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
