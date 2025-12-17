console.log("Hello world")
// vong lap for 

for (let i = 0; i <= 5; i++) {
    console.log("i =", i)
}

// vong lap while 

const score = 10;

while (true) {
    if (score > 11) {
        console.log("Hello")
        break;
    }
    if (score > 7) {
        console.log("System")
        break;
    }
    if (score > 9) {
        console.log("setting")
        break;
    }
}


// vong lap do-while
const a = 10;
do {

    if (a > 11) {
        console.log("a>11")
    } else {
        console.log("a<11")
    }
} while (a > 17);
console.log("=============================================")
// for-each
const MyClass = ["Toan", "Van", "Anh", "Hoa"]
//c1
MyClass.forEach(function (value, index) {
    console.log("Value:", value, ", Index: ", index)
})

//c2 di lam
console.log("=============================================")

MyClass.forEach((value, index) => {
    console.log("Value:", value, ", Index: ", index)
})


