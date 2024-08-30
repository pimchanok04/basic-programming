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