alert("Wellcome")

const char = document.querySelector(".headfirst");
// console.log(char.style);
// gán để css dc nhiều đỡ mấy công gõ lại

Object.assign(char.style, {
    height: "100px",
    width: "200",
    backgroundColor: "red",
});

// lấy giá trị in ra

console.log(char.style.height);