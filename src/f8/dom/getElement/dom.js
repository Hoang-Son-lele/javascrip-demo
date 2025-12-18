


// Dom có 3 thành phần chính 
// 1.Element
// 2.Attribute
// 3.Text


// get element menthod

// id 
const nodeId = document.getElementById('heading1');
console.log(nodeId)
console.log("==============================")
// class
const nodeClass = document.getElementsByClassName('heading')[2];
console.log(nodeClass);
console.log("==============================")
const nodeClassFor = document.getElementsByClassName('heading');
for (let i = 0; i < nodeClassFor.length; i++) {
    console.log(nodeClassFor[i]);
}
console.log("==============================")
//querySelector 
console.log(document.querySelector(".heading"));
console.log("==============================")
//querySelectorAll
console.log(document.querySelectorAll(".heading"));
