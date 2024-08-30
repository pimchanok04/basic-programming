const score = [10,23,26,30,33]

let sum: number = 0

for (let i = 0; i < score.length; i++) {
    sum = sum + score[1]
}

let avg = sum / score.length
console.log("Total: ", sum)
console.log("Avg: ", avg)


const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)


const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray: string[] = myStudents.split('#')

console.log(myStudents)
console.log(myStudentsArray)


const fullname: string = 'สุดสวย สวยสุด'

console.log(fullname.split(' ')[1])

console.log(fullname.slice(0, fullname.indexOf))


const animal: string = ('หมา*แมว*กระต่าย*โลมา')

const animalArray: string[] = animal.split('*')

console.log(animal)
console.log(animalArray)



const animal: string = ('หมา*แมว*กระต่าย*โลมา')

const animalArray: string[] = animal.split('*')

console.log("ตั้งต้น: " , animalArray)

console.log("เอาตัวสุดท้ายออก: ", animalArray)

animalArray.push('ยีราฟ') // ใส่ต่อท้าย

console.log("ใส่ต่อทท้าย: ", animalArray)

animalArray.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", animalArray)

animalArray.unshift('กาปิบาร่า') //ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ", animalArray)