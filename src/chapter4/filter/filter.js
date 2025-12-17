console.log("Hello World ")

const age = [20, 19, 22, 24, 29, 32, 34];
const x = age.filter((value, index) => {
    if (value % 2 === 0) {
        return value;
    }
})
console.log("value:" + x);