
// const text = document.querySelectorAll("h2");
// // console.log(text);

// for (var i = 0; i < text.length; ++i) {
//     text[i].onclick = function (e) {
//         // console.log(e.target);
//     };
// }

// bài test
// demo 

// const inputElements = document.querySelector("input[type='text']")

// inputElements.onchange = function (e) {
//     console.log(e.target.value)
// }


// lấy cái text
// const inputElements = document.querySelector("select")
// inputElements.onchange = function (e) {

//     console.log(inputElements.options[inputElements.selectedIndex].innerText)
// }


// lấy value
const inputElements = document.querySelector("select")
inputElements.onchange = function (e) {
    console.log(e.target.value)
}
