const filechk = require('fs');

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

module.exports = countStudents;
