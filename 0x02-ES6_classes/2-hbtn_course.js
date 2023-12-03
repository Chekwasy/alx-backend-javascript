/* eslint-disabled */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (Array.isArray(students) === false) {
      throw new TypeError('Students must be an array');
    }
    for (const itm of students) {
      if (typeof itm !== 'string') {
        throw new TypeError('Array must be an array of string');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nm;
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = len;
  }

  get students() {
    return this._students;
  }

  set students(stu) {
    if (Array.isArray(stu) === false) {
      throw new TypeError('Students must be an array');
    }
    for (const itmm of stu) {
      if (typeof itmm !== 'string') {
        throw new TypeError('Array must be an array of string');
      }
    }
    this._students = stu;
  }
}
