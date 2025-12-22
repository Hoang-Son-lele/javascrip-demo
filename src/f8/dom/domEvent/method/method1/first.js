alert("Wellcome")

//Prevent Default
// Stop Propagation


//1.PreventDefault
// ngăn chặn mọi hành vi mặc đinh xảy ra trong trang web
//Example 1
const aElement = document.querySelectorAll("a");
for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function (e) {
        if (!e.target.href.startsWith("https://www.youtube.com/")) {
            e.preventDefault();
        }
    }
}

//Example 2.
const ulElement = document.querySelector("ul");
ulElement.onmousedown = function (e) {
    e.preventDefault();
}
ulElement.onclick = function (e) {
    console.log(e.target)
}

// 2. Stop Propagation
//ngăn chặn nổi bọt
const divElement = document.querySelector("div");
divElement.onclick = function (e) {
    console.log("DIV");
}

const buttonElement = document.querySelector("button");
buttonElement.onclick = function (e) {
    e.stopPropagation();
    console.log("Click me");
}