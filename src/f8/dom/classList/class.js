const char = document.querySelector(".heading");
console.log(char);
// classList
// add
char.classList.add('headingsecond');

//kiểm tra có hay k 
console.log(char.classList.contains('headingsecond'));

// xóa
char.classList.remove('headingsecond');

//toggle có thì xóa ko có thì thêm

char.classList.toggle('headingsecond');


