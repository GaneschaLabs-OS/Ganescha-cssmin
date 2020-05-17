#!/usr/bin/env node
'use strict'
const cssmin = require('ganescha-cssmin');
const fs = require('fs');
const [, input, output] = process.argv;
const css = fs.readFileSync(input, 'utf8');

fs.writeFile(output, min, function (err) {
    if(err) {
        return console.log(err);
    }
    console.log('ganescha-cssmin done');
}); 