const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
let DB_FILE = ''
if (process.argv.length > 2) {
    DB_FILE = process.argv[2]
}
else {
    DB_FILE = 'no file';
}

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */

const allRes = [];
const resTx = 'This is the list of our students';
const countStudents = (path) => new Promise((resolve, reject) => {
  filechk.readFile(path, 'utf-8', (err, data) => {
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
	allRes.push(`Number of students: ${len}`);
	allRes.push(
            `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`,
	);
	allRes.push(
            `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`,
	);
	resolve(true);
    }
  });
});

const app = http.createServer((req, res) => {
    if (req.url === '/') {
	const resTxt = 'Hello Holberton School!'
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', resTxt.length);
	res.statusCode = 200;
	res.write(resTxt);
	res.end();
    }
    if (req.url === '/students') {
	allRes.push(resTx);
	countStudents(DB_FILE)
	    .then(() => {})
	    .catch((error) => {
		allRes.push('Cannot load the database')
	    });
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', allRes.join('\n').length);
	res.statusCode = 200;
	res.write(allRes.join('\n'));
	res.end();
    }
});


app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
