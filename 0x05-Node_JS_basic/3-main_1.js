const countStudents = require('./55');

countStudents("database.csv")
    .then((aaa) => {
        console.log(aaa);
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
