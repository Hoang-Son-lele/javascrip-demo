// const fullName = "Trinh Xuan Hoang Son"
// const today = new Date();
// const year = today.getFullYear();
// let birthYear = year - 2005;
// let isStudent = false;
// if (birthYear >= 18) {
//     isStudent = true;
// } else {
//     isStudent = false;
// }
// // console.log(fullName)
// // console.log(birthYear)
// // console.log(isStudent)
// console.log(`
//     Name: ${fullName}
//     Year: ${birthYear}
//     Student: ${isStudent}
//     `)




// chú ý map: biến đổi
// filter lọc
// reduce đếm, gom, tính


// 7.
// 1.
// const user = {
//     id: 1,
//     name: "Hoang Son",
//     age: 20
// };


// console.log(user.id)
// console.log(user.name)
// console.log(user.age)

// 2.
// user.email = "son@gmail.com"
// console.log(user.email)

// 3.
// user.age = 21
// console.log(user.age)

// 4.
// user.remove(id);

// 5.
// const users = [
//     { id: 1, name: "An", age: 18 },
//     { id: 2, name: "Binh", age: 22 },
//     { id: 3, name: "Cuong", age: 16 }
// ];

// 7.5
// const fil = users.filter((value) => {
//     return value.age >= 18
// })

// console.log(fil)

// 7.6

// const Maping = users.map((value) => {
//     return value.name
// })
// console.log(Maping)

// 7.7

// const finding = users.find((value) => value.id === 2);
// console.log(finding)


// Bai 8
// 8.1
// const getIdsh1 = document.getElementById("title");
// const getclassP = document.getElementsByClassName("desc");
// const getButton = document.querySelector("button")
// console.log(getIdsh1)
// console.log(getclassP)
// console.log(getButton)


// 8.2
// const getIdsh1 = document.getElementById("title");
// getIdsh1.innerHTML = "Welcome Hoang Son"

// 8.3
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     console.log("Button clicked");
//     btn.innerText = "Clicked";
// });

// 8.5
// const inputElement = document.querySelector("input");
// const pElement = document.getElementById("result")

// inputElement.oninput = (value) => {
//     const name = value.target.value;
//     pElement.innerText = `Xin chào ${name}`

// };

