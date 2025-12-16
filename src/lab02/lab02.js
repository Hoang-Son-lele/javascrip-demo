const tinhtrungbinh = (toan, van, anh) => {
    if (typeof toan === 'number' && typeof van === 'number' && typeof anh === 'number') {
        return (toan + van + anh) / 3
    } else {
        return;
    }


}

const x = tinhtrungbinh(10, 9, 10);

function xeploai(x) {
    if (x > 9 && x <= 10) {
        console.log("Xuat sac")
    } else if (x > 8 && x <= 9) {

        console.log("Gioi")
    } else if (x > 6.5 && x <= 8) {
        console.log("Kha");

    } else {
        console.log("Trung Binh")
    }
}
xeploai(x);