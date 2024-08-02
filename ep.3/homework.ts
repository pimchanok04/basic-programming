function shape(height: number , weight: number) {
    let shape = weight /  (height * height) ;

    if (shape < 18.5) {
        return 'ตํ่ากว่าเกณฑ์' ;
    } else if (shape >= 18.5 && shape < 22.9) {
        return 'ปกติ';
    } else if (shape >= 23 && shape < 24.9) {
        return 'เริ่มอ้วน';
    } else  if (shape >= 25 && shape < 29.9) {
        return 'อ้วน';
    } else if (shape > 30) {
        return 'Very fat'
    } else {
        return 'Error'
    }
}
console.log(shape(1.58,42)