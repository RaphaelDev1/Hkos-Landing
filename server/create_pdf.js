const fs = require('fs');
const pdf = require("pdf-creator-node");


module.exports = (template, Data, cb) => {
    const html = fs.readFileSync(`html/${template}`, "utf8");

    const options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm",
    };

    const document = {
        html: html,
        data: Data,
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

    cb()

}