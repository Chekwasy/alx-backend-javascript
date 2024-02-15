import readDatabase from '../utils';
/**
 * Contains the miscellanous handlers
 */
class StudentsController {
  static getAllStudents(request, response) {
    const Path = process.argv[2];
    readDatabase(Path)
      .then((resolved) => {
        const stdLst = [];
        const first = 'This is the list of our students';
        stdLst.push(first);
        stdLst.push(`Number of students in CS: ${resolved.CSlen}. ${resolved.CS}`);
        stdLst.push(`Number of students in SWE: ${resolved.SWElen}. ${resolved.SWE}`);
        response.status(200).send(stdLst.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const expected = ['CS', 'SWE'];
    const { major } = request.params;
    if (!(expected.includes(major))) {
      response
        .status(500)
        .send('Major parameter must be CS or SWE');
      return;
    }
    const Path = process.argv[2];
    readDatabase(Path)
      .then((resolved) => {
        if (major === 'CS') {
          response.status(200).send(resolved.CS);
        } else {
          response.status(200).send(resolved.SWE);
        }
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
