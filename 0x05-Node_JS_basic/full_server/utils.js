/**
 * read a file and run some work on the file contents via async
 */
const filechk = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  filechk.readFile(path, 'utf-8', (err, data) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const readed = data.split('\n');
      const allStd = [];
      for (const std of readed.slice(1)) {
        allStd.push(std.split(','));
      }
      const cs = [];
      const swe = [];
      for (const ech of allStd) {
        if (ech.includes('CS')) {
          cs.push(ech[0]);
        }
        if (ech.includes('SWE')) {
          swe.push(ech[0]);
        }
      }
      const grouped = {};
      grouped.CS = `List: ${cs.join(', ')}`;
      grouped.SWE = `List: ${swe.join(', ')}`;
      grouped.CSlen = `${cs.length}`;
      grouped.SWElen = `${swe.length}`;
      resolve(grouped);
    }
  });
});

module.exports = readDatabase;
export default readDatabase;
