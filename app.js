const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");

(async () => {
  try {
    const users = await CSVToJSON().fromFile("data.csv");

    console.log(users);

    //create Json file
    FileSystem.writeFile(
      "data.json",
      JSON.stringify(users, null, 4),
      (err) => {
        if (err) {
          throw err;
        }
        console.log("JSON array is saved");
      }
    );
  } catch (err) {
    console.log(err);
  }
})();
