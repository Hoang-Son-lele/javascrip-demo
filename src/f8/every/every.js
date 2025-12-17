alert("Wellcome")
console.log("Hello world")

const course = [
    {
        id: 1,
        class: "F8",

        name: "Son",
        coin: 0
    },

    {
        id: 2,
        class: "F8",
        name: "Cin",
        coin: 0
    },
]

const key = course.every(function (value, index) {
    console.log(index)
    return value.name === "Cin";
});

console.log(key);