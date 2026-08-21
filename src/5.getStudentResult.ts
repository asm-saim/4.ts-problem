interface Student {
  name: string;
  marks: number[];
}

const getStudentResult = (student: Student): string => {
  let totalNumber =
    student.marks.reduce((acc, items) => acc + items, 0) /
    student.marks.length;

  return `name: ${student.name}, average: ${totalNumber}, result: ${totalNumber > 40 ? "Passed" : "Failed"}`;
};

let student1 = {
  name: "Rafi",
  marks: [80, 75, 90, 85],
};
console.log(getStudentResult(student1))