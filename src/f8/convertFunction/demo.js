const course = ["Java", "JS", "CSS", "HTML"]

Array.prototype.forEach2 = function (callback) {
    for (let index = 0; index < course.length; index++) {
        callback(this[index], index)
    }

}
course.forEach2((value, index) => { console.log("Value:", value, " Index: ", index) })
