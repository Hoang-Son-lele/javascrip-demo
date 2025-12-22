console.log("Hello World");
const myString = " Hoc JS tai F8   ";
// Lam viec voi chuoi

// 1 Độ dài chuỗi 
console.log(myString.length);
if (myString.length === 13) {
    alert("Wellcome")
}
// 2 find index 
myString.lastIndexOf("JS") //last

console.log(myString.indexOf("JS"))


// cut String 
console.log(myString.slice(4, 6));

// Convert to upper case
console.log(myString.toUpperCase());
// Convert to Lower case
console.log(myString.toLowerCase());
//Trim
console.log(myString.trim());
//split 
const Monhoc = "Toan,Anh,Van"
console.log(Monhoc.split(","));
// chatAt

const names = "Hoang Son";
console.log(names.charAt(2));
