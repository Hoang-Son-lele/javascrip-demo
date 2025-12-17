console.log("Hello World")

const score = [10, 8, 8, 9, 7];
// for-each
// score.forEach((value, index) => {
//     console.log(value, index)
// })

//map

score.map((value, index) => {
    console.log(value, index)
})
console.log("========================")
//c1 chi moi value
const x = score.map((x) => x * 2)
console.log(x)


//c2 value and index
console.log("========================")
const a = score.map((element, i) => {
    return element * 10
})

console.log(a);