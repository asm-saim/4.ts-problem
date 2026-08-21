"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    let totalNumber = student.marks.reduce((acc, items) => acc + items, 0) / student.marks.length;
    return {
        name: student.name,
        average: totalNumber,
        result: totalNumber > 40 ? "Passed" : "Failed",
    };
};
let student1 = {
    name: "Nabil",
    marks: [30, 35, 40, 25],
};
console.log(getStudentResult(student1));
//# sourceMappingURL=5.getStudentResult.js.map