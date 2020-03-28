const fs = require('fs');
const path = require('path');
const { PdfReader } = require('pdfreader');

const reader = new PdfReader();

let rows = {}; // indexed by y-position

reader.parseFileItems(
  path.join(__dirname, '../public/andersonDayResume09232019.pdf'),
  (error, data) => {
    if (error) throw error;
    else if (!data) console.log('No item');
    else if (data.text) {
      (rows[data.y] = rows[data.y] || []).push(data.text);
      console.log(data.text);
      console.log(rows);
    }
  }
);
//
// const util = ('util');
// getStuff().then(data => {
//   console.log(data);
// })
//

//
// const readFile = util.promisify(fs.readFile);
//
//
//
// const getStuff = () => {
//   return readFile(path.join(__dirname, '../public/andersonDayResume09232019.pdf'));
// }

// fs.readFile(path.join(__dirname, '../public/andersonDayResume09232019.pdf'), (error, data) => {
//   process.stdout.write(data)
//
//
// })

// const BASE_PATH = path.resolve(
//   process.env.BASE_PATH || __dirname
// );
//
//
// async function readFile(file) {
//
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf8', function (err, data) {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// }
// async function main(){
//   await readFile(path.join(__dirname, '../public/andersonDayResume09232019.pdf'));
// }
//
// console.log(main())
