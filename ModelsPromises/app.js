const { Module } = require("module");

const fs = require("fs").promises;

// function writeFileAsync(filepath, content) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filepath, content, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve("File has been successfully written!");
//       }
//     });
//   });
// }

// const filepath = "message.txt";
// const fileContent = "Hello, this is a test content!";

// writeFileAsync(filepath, fileContent)
//   .then((succesMessage) => {
//     console.log(succesMessage);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });



// function readFileAsync(filePath, encoding = "utf-8") {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, encoding, (err, data) => {
//       if (err) {
//         reject(new Error(`Error reading from the file: ${err.message}`));
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// const filePath = "text4.txt";

// readFileAsync(filePath)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// module.exports = {
// //   writeFileAsync,
//   readFileAsync,
// };

// async function writeFile(filePath, content) {
// console.log('hello');
// await fs.writeFile(filePath, content)
// }

// writeFile('text4.txt', 'hello here in text4 HHHHHH')

// async function readFile(filePath) {
//     const content = await fs.readFile(filePath, 'utf-8')
//     console.log(content);
// }
// // readFile('text4.txt')

// async function processFiles() {
//     const content1 = await readFile('text4.txt');
//     console.log('===========>', content1)
//     if (content1) {
//         console.log(content1)
//         // const readContent = content1.toUpperCase();
//         // await writeFile('text4.txt', readContent);
//         // console.log('===========>',readContent);
//     } else {
//         console.log('Error reading file.');
//     }
// }
// processFiles()


async function writeFile(filePath, content) {
    console.log('hello');
    await fs.writeFile(filePath, content);
}

async function readFile(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(content);
    return content; // Add this line to return the content
}

async function processFiles() {
    const content1 = await readFile('text4.txt');
    if (content1) {
        const readContent = content1.toLowerCase();
        await writeFile('text4.txt', readContent);
        console.log(readContent);
    } else {
        console.log('Error reading file.');
    }
}


processFiles();
