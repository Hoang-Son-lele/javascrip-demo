// điều kiện if
let Score = 8;
if (Score > 7 && Score < 10) {
    console.log("Khá")
}

// điều kiện if else 
let x = 10
if (x < 20) {
    console.log("Hello bạn nhé")
} else {
    console.log("x>20 này")
}

// swich case

let a = 9.4;
switch (true) {
    case (a < 10 && a > 9):
        console.log("Sinh viên xuất sắc")
        break;

    case 9:
        console.log("Sinh viên giỏi")
        break;

    case 8:
        console.log("Sinh viên khá")
        break;

    case 7:
        console.log("Sinh viên trung bình")
        break;

    default:
        console.log("Erorr condiittion", a);
        break;
}
