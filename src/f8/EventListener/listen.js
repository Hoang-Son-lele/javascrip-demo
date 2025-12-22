alert("Wellcome")


//addEventListener
//removeEvenListener

// xử lý nhiều việc khi 1 event xảy ra
// Lắng nghe/Hủy bỏ lắng ngghe

const btnElement = document.getElementById("btn");
//vd1
// btnElement.addEventListener("click", () => {
//     console.log("Viec 1")
//     console.log("Viec 2")
//     console.log("Viec 3")
// })

//vd2 
function viec1() {
    console.log("Viec 1");
}
function viec2() {
    console.log("Viec 2");
}
function viec3() {
    console.log("Viec 3");
}

btnElement.addEventListener("click", viec1);
btnElement.addEventListener("click", viec2);
btnElement.addEventListener("click", viec3);

// hủy bỏ nắng nghe dùng removeEvenListener 
// vidu hủy nắng nghe của viec2 sau 3s

setTimeout(() => {
    btnElement.removeEventListener("click", viec2)
}, 3000);
