// let 5sum: number = 0

// for (let i = 1; 1 <= 31; 1+1) {
//     sum = sum + 1 
// }

// console.log('Total: ', sum)

// let sum: number = 0
// let i: number = 1

// while (i <= 31) {
//       sum = sum + 1
//       i++
// }

// console.log('Total; ', sum)

// let sum: numbert = 0
// let i: number = 1

// do {
// sum = sum + 1
// i++
// } while (i <= 31)

// console.log('Total: ', sum)



let count: number = 0

while (true) {
    console.log("โสดโว้ย")
    count++
    if (count === 10) {
        break
    }
}



for (let i = 1; i <= 20; i++) {
    console.log('ฉันอายุ ' + i + 'ปี')
}

let i: number = 1
while (i <= 20) {
    console.log('ฉํนอายุ ' + i + 'ปี')
    i++
}

let i: number = 1
do {
    console.log('ฉัันอายุ ' + i + 'ปี')
    i++
} while (i <= 20)


    let car1: string = 'Toyota'
let car2: string = 'Honda'
let car3: string = 'Suzuki'
let car4: string = 'Yamaha'
let car5: string = 'Mazda'

const cars: string[]= ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']
const num: number[] = [1, 2, 3, 4, 5]
const bool: boolean[] = [true,true,true,true,true]


// connst cars: string[] = {'Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda'}

const str: string ='ชอบก็จัด ประหยัดทำไม'

console.log(str.charAt(2))

// connst cars: string[] = {'Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda'}

const str: string ='ชอบก็จัด ประหยัดทำไม'

console.log(str[2])

const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

cars[2] = 'Isuzu'

console.log(cars[2])


const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[4])


const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i = 0; 1 < 5; i++) {
    console.log(cars[1])
}


const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i = 0; 1 < cars.length; i++) {
    console.log(cars[1])
}


const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i = 0; 1 < cars.length; i++) {
    if (cars[1] === 'Yamaha'){
        console.log('รถซื้อแกง จะแรงได้ยังไง')
    }
}

let i: number = 0

while (i <= cars.length) {
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ยังไง')
    }
    i++
}



const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

// for let i = 0; i < cars.length; i++
//     if (cars[1] === 'Yamaha') {
//         console.log('รถซสื้อแกง จะแรงได้ยังไง)
//      }
// }

// console.log(cars.includes('BYD))

const str: string = 'forth'

console.log(str.indexOf('X'))



const friend: string[] = ['Pimchanok', 'Thananchanok', 'NAtchaporn', 'Sunisa', 'Morakot']

 for (let i = 0; i < friend.length; i++) {
     if (friend[i] === 'Morakot') {
        console.log('ไปกินหมูกระทะกัน')
     }
 }