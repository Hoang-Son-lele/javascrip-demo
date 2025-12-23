//Sync :đỒng bộ
//async: bất đồng bộ
// Nỗi đau
//Lý Thuyết
// Cách hoạt động
//Thực hành


//1.//Sync :đỒng bộ
//async: bất đồng bộ

//setTimeout, setInterval,fetch, XMLHttpRequest, file reading, 
// request animation frame (đụng vào đây là bất đồng bộ)

// call back hell
// setTimeout(function () {
//     console.log("1");
//     setTimeout(function () {
//         console.log("2");
//         setTimeout(function () {
//             console.log("3");
//             setTimeout(function () {
//                 console.log("4");
//                 setTimeout(function () {
//                     console.log("5");

//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// => Giai quyết dùng promise 

// 1.new Promise
// 2. Executor

// Trạng thái promise 
// 1. Pending : đang chờ.
// 2. Fulfilled :thành công
// 3. Rejected : thất bại
var promise = new Promise(
    //Executor
    function (resolve, reject) {

        // logic
        //Thành công: resolve()
        //Thất bại:reject()

        //Fake call API 
        reject("Co loi!");
    }
);

promise
    .then(function () {    // thành công thì vào đây
        console.log("Sucessfully")
    })
    .catch(function (error) {  // thất bại 
        console.log(error)
    })
    .finally(function () { // 1 trong 2 thằng 
        console.log("Done")
    });


//Pyramid of doom 


