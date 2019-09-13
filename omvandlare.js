
  let csvToJson = require('convert-csv-to-json'); //den hämtar modullen

let fileInputName = 'Bok1.csv'; // Bok1.csv  kommer att bli fileInputName
let fileOutputName = 'om.json'; // om.json  kommer att bli fileOutputName

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName); //man använder cvsToJson modullen för att göra den från csv till json,generateJsonFileFromCsv är en funktion i modullen som skriver om filen
