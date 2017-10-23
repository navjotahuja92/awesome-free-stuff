function generateOutput(node, TEMPLATE_COLLECTION, TEMPLATE_ITEM, multiplierString, multiplier) {
    multiplier = multiplier || 0;
    if (node.type == "collection") {
        var collectionString = TEMPLATE_COLLECTION.replace(/%NAME%/g, node.name);
        if (multiplierString) {
            collectionString = collectionString.replace(/%m%/g, multiplierString.repeat(multiplier));
        }
        var allSubNodeString = node.data.map(datum => generateOutput(datum, TEMPLATE_COLLECTION, TEMPLATE_ITEM, multiplierString, multiplier + 1));
        return collectionString.replace(/%DATA%/g, allSubNodeString.join(''));
    } else if (node.type == "link") {
        var templateString = TEMPLATE_ITEM.replace(/%LINK%/g, node.link).replace(/%NAME%/g, node.name);
        if (multiplierString) {
            templateString = templateString.replace(/%m%/g, multiplierString.repeat(multiplier));
        }
        return templateString;
    }
}

module.exports = {
    generateOutput: generateOutput
};