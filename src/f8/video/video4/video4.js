alert("Wellcome");
console.log("Hello World ");

// create a object contructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

}
// thêm thuộc tính vào User dùng propotype

User.prototype.className = "F8";
User.prototype.getClassName = function () {
    return this.className;
}
const author = new User("Son", "Trinh", "AVATAR");
const user = new User("Nam", "Nguyen", "AVATAR");

console.log(author)
console.log(user.getClassName())