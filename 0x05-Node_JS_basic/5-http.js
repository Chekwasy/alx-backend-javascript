const http = require('http');
const filechk = require('fs');

const PORT = 1245;
const HOST = 'localhost';
let DB_FILE = ''
if (process.argv.length > 2) {
    DB_FILE = process.argv[2]
}
else {
    DB_FILE = '';
}

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */

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
	const allRes = [];
	allRes.push('This is the list of our students');
	countStudents(DB_FILE)
	    .then((allMRes) => {
		const resStr = allRes.push(allMRes);
		const rStr = resStr.join('\n');
		res.setHeader('Content-Type', 'text/plain');
		res.setHeader('Content-Length', rStr.length);
		res.statusCode = 200;
		res.write(rStr);
	    })
	    .catch((err) => {
		const errM = allRes.push('Cannot load the database');
		const errMsg = 'kkk'
		res.setHeader('Content-Type', 'text/plain');
		res.statusCode = 200;
		res.write(err);
	    });
    }
});


app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
