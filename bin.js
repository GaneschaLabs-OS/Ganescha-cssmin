#!/usr/bin/env node
'use strict'
const cssmin = require('ganescha-cssmin');
const fs = require('fs');
const [, input, output] = process.argv;

fs.readFile(input, 'utf8', function (err, content) {
    if(err) {
        return console.log(err);
    }

    fs.writeFile(output, cssmin(content), function (err) {
        if(err) {
            return console.log(err);
        }
        console.log('ganescha-cssmin done');
    }); 
});

