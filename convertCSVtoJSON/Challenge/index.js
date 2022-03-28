const csvtojson = require("csvtojson");
const fs = require("fs");

const csvFilePath = "source.csv";

csvtojson()
.fromFile(csvFilePath)
.then((json) => {

    fs.writeFileSync("output.json", JSON.stringify(json), "utf-8", (err) => {
        if (err) console.log(err);
    })
})
