var freeStuffData = require('../data.json');
var fs = require('fs');
var utils = require('./utils');
var templateString = fs.readFileSync('templates/readme-template.md', 'utf8');
var replacer = '<!--injectHere-->';
var outputFile = 'README.md';
const TEMPLATE_COLLECTION = `%m%* %NAME%
%DATA% `;
const TEMPLATE_ITEM = `%m%* %NAME% %LINK%
`;
var contents = utils.generateOutput(freeStuffData, TEMPLATE_COLLECTION, TEMPLATE_ITEM, '    ');
var finalOutput = templateString.replace(replacer, contents);

fs.writeFile(outputFile, finalOutput, 'utf-8');
