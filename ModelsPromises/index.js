const fs = require("fs");


function writeFileAsync(filepath, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filepath, content, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("File has been successfully written!");
        }
      });
    });
  }
