function sayHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayOfWeek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfWeek === 4) {
        console.log('สวัสดีวันพุธ')
    } else if (dayOfWeek === 5) {
        console.log('สวัสดีวันพฤหัสบดี')
    } else if (dayOfWeek === 6) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayOfWeek === 7) {
        console.log('สวัสดีวันเสาร์')
    }
}
sayHi(7)