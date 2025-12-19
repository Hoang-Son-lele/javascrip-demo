alert("Wellcome");

// add a attribute 

const nodeList = document.querySelector("h1");
// add element id
//c1 work
console.log(nodeList.setAttribute("id", "heading1"));
//c2 basic
// console.log(nodeList.id = "heading 2");
// add element class
//c1 work
console.log(nodeList.setAttribute("className", "heading"));
//c2 basic
// console.log(nodeList.className = "headingauto");
// add title 
//c1 work
console.log(nodeList.setAttribute("title", "first"));
//c2 basic

// add a link chu y add link ma kieu basic chi add dc tag a
// c1 work
console.log(nodeList.setAttribute("href", "cinby"));

console.log("================================")

// getAttribute
console.log(nodeList.getAttribute("title")) // first 


// chú ý setAttribute
//cach ma basic chi co the set dc trong cac tag suitable
// cach work co the lam full
console.log("=====================Btap======================");
//b1 

const click = document.querySelector("button");

click.addEventListener("click", () => {
    if (click.getAttribute("data-state") === "off") {
        click.setAttribute("data-state", "on");
    } else {
        click.setAttribute("data-state", "off");
    }
});

