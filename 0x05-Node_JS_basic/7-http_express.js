const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2];

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
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
      const len = cs.length + swe.length;
      const allM = [];
      allM.push(`Number of students: ${len}`);
      allM.push(
        `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`,
      );
      allM.push(
        `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`,
      );
      resolve(allM.join('\n'));
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
