
const body = require('body-parser');

const dataDevis = {


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
    product: body.product,
    dateproduct: body.dateproduct,
    uniteproduct: body.uniteproduct,
    quantiteproduct: body.quantiteproduct,

    htprixproduct: body.htprixproduct,
    tvaproduct: body.tvaproduct,
    montantproduct: body.montantproduct,

    messagefacture: body.messagefacture,
    limitedate: body.limitedate,
    modereglement: body.modereglement,
    table: body.table,

    contratname: body.contratname,
}

module.exports = {
    dataDevis,
  };