console.log("Hello World")

// khai bao 1 array
const names = ["hello", "son", "hanoi"]
let others = ["hello", "son", [1, 2, 3], true]



for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//thay gia tri
others[3] = "update";
// console.log(others);

//=========================
// thêm cuối mảng 
names.push("goodbye")


//=========================

// thêm đầu mảng 
names.unshift("1");

//=========================

// xóa đầu mang 
// names.shift()

//=========================
// xóa cuối mảng
names.pop()

//=========================
//splice(index,dele,add)
others.splice(1, 0, 88)

console.log(others)
console.log(names)