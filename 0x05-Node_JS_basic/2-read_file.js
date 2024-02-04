/**
 * read a file and run some work on the file contents
 */ 
const filechk = require('fs');

const countStudents = (path) => {
    if (!filechk.existsSync(path)) {
	throw new Error('Cannot load the database');
    }
    if (!filechk.statSync(path).isFile()) {
	throw new Error('Cannot load the database');
    }
    const readed = filechk.readFileSync(path, 'utf-8').split('\n');
    const len = readed.length - 1;
    const all_std = [];
    for (const std of readed.slice(1)) {
	all_std.push(std.split(','));
    }
    const cs = []
    const swe = []
    for (const ech of all_std) {
	if (ech.includes('CS')) {
	    cs.push(ech[0]);
	}
	if (ech.includes('SWE')) {
	    swe.push(ech[0]);
	}
    }
    console.log(`Number of students: ${ len }`);
    console.log(
	`Number of students in CS: ${ cs.length }. List: ${ cs.join(', ') }`
    );
    console.log(
	`Number of students in SWE: ${ swe.length }. List: ${ swe.join(', ') }`
    );
}
module.exports = countStudents;
