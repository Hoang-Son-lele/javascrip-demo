const course = [

    {
        id: 1,
        name: "Son",
        className: "JavaScript",
        coin: 0
    },
    {
        id: 2,
        name: "Nam",
        className: "Nodejs",
        coin: 100
    },
    {
        id: 3,
        name: "Hoang",
        className: "React",
        coin: 500
    },
    {
        id: 4,
        name: "Hai",
        className: "HTML",
        coin: 750
    },
    {
        id: 5,
        name: "Huyen",
        className: "Css",
        coin: 400
    },
]


// for each
const x = course.forEach((value, index) => {
    console.log(value, index)
})


// map
const a = course.map((b, c) => { return b.coin * 2 });
console.log(a);

// reduce cách ngắn gọn

const alpha = course.reduce((x, z) => { return x + z.coin }, 0);
console.log(alpha);
// cách dễ hiểu

console.log("++++++++++++++++++++++++++++++")
function calculate(temp, currentValue, currentIndex, originArray) {
    // console.log(temp)
    // console.log(currentValue)
    // console.log(currentIndex)
    // console.log(originArray)
    return temp + currentValue.coin
}
const beta = course.reduce(calculate, 0)

console.log(beta)

// const a = [1, 4, 6, 9, 12];
// const sum = a.reduce((temp, value) => {
//     return temp + value
// }, 0)
// console.log(sum)

