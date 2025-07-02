console.log("----> loading app.js file")
const textHelper = require("./text-formatter.js");
const paraHelper = require("./paragraph-formatter.js");

const res1 = textHelper.getCapitalizedText("hello from node js modules");
const res2 = paraHelper.formatParagraph(`The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread. These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.`);

console.log("----> Text-Response: ", res1);
console.log("----> Paragraph-Response: ", res2);