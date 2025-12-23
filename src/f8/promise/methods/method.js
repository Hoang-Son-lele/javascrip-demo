// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     })
// }
// sleep(1000)
//     .then(() => {
//         console.log("1");
//         return sleep(1000);

//     })
//     .then(() => {
//         console.log("2");
//         return new Promise((resolve, reject) => {
//             reject("Có lỗi");
//         })
//     })
//     .then(() => {
//         console.log("3");
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log("4");
//         return sleep(1000);
//     })
//     .catch(function (err) {
//         console.log(err)
//     })



// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all 

//1
//2
// var promise = new Promise((resolve, reject) => {
//     //logic


//     // resolve("succes");
//     reject("Lỗi nè !")

// })
// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//3.

var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1]);
    }, 2000)
})


var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 3, 4]);
    }, 4000)
})

Promise.all([promise1, promise2]).then((result) => {
    result1 = result[0];
    result2 = result[1];
    console.log(result1.concat(result2));
})
/// lưu ý 1 cái mà reject thì nó sẽ nhảy vào catch nhé.