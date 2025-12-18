const course = ["Java", "JS", "CSS", "HTML"]

Array.prototype.forEach2 = function (callback) {
    callback(this[index])
}




course.forEach2((value, index) => { console.log("Value:", value, " Index: ", index) })
