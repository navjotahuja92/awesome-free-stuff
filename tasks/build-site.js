var freeStuffData = require('../data.json');
var fs = require('fs');
var utils = require('./utils');
var templateString = fs.readFileSync('templates/index-template.html', 'utf8');
var replacer = '<!--injectHere-->';
var outputFile = 'index.html';
const TEMPLATE_COLLECTION = `<ul> 
<span class="collection">%NAME%</span>
%DATA% 
</ul>`;
const TEMPLATE_ITEM = `<li> 
<a href="%LINK%">%NAME%</a>
</li>`;
var contents = utils.generateOutput(freeStuffData, TEMPLATE_COLLECTION, TEMPLATE_ITEM);
var finalOutput = templateString.replace(replacer, contents);

fs.writeFile(outputFile, finalOutput, 'utf-8');
