const myInfo = {
    name: "Son",
    age: 20,
    gender: "male",
    address: "hanoi",
    getName: function () {
        return this.name;
    }
};



// them 1 key   
myInfo.email = 'hson@gmail.com';


// xóa 1 key 
delete myInfo.age;


// function
console.log(myInfo.getName());