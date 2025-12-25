
// //IIFE
// // 1.IIFE trông như thế nào
// // 2.Dùng dấu ; trước IIFE
// // 3.IIFE là hàm private
// // 4. Sử dụng IIFE khi nào 
// // 5.Các cách tạo ra một IIFE
// // 6.Ví dụ sử dụng IIFE


// //1
// // (() => {
// //     console.log("Hello world");
// // })()


// //2. private 
// ;(function myFunction(){
//     console.log("Now");
// })()
// // ko gọi được 
// //myFunction() err

// // đệ quy 
// let i = 0;
// ;(function myFunction(){
//  i++;
//  console.log(i);
//  if(i<10){
//     myFunction()
//  }
// })

// //4.Sử dụng IIFE khi nào
// ;(function(){
//     let fullname = "Hoang Son"
// })()
// //Khi muốn 1 đoạn mã chạy ngay nhưng nó ko chui ra global để tránh ảnh hưởng


// 5 vdu sử dung IIFE

const app = (function () {
    // private
    const cars = []
    return {
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car

        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
})()