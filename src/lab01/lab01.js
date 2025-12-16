const fullName = "Trinh Xuan Hoang Son"
const today = new Date();
const year = today.getFullYear();
let birthYear = year - 2005;
let isStudent = false;
if (birthYear >= 18) {
    isStudent = true;
} else {
    isStudent = false;
}
// console.log(fullName)
// console.log(birthYear)
// console.log(isStudent)
console.log(`
    Name: ${fullName}
    Year: ${birthYear}
    Student: ${isStudent}
    `)
