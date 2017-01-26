'use strict';

const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

exports.isPickleHere = (event, context, callback) => {
    const file = path.join(__dirname, 'index.html');
    const template = handlebars.compile(fs.readFileSync(file).toString());

    const templateVars = {
        status: "Yes", // eventually get this from somewhere cool
    };

    const html = template(templateVars);

    const response = {
        "statusCode": 200,
        "headers": { "Content-Type": "text/html" },
        "body": html.toString(),
    };

    callback(null, response);
};
