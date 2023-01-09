const fs = require("fs");
const { parse } = require("csv-parse");
const { default: axios } = require("axios");
axios

const data = [];
fs.createReadStream("./waterbodies.csv")
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  )
  .on("data", function (row) {
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {

    data.map((wb) => {
      axios({
        url: "http://localhost:3000/feed",
        data: wb,
        method: "POST",
      }).then((data) => {
        console.log("all good");
      }).catch((err) => {
        console.log(err);
      })
    })
  });
