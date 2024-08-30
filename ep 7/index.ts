const score = [10,23,26,30,33]

let sum: number = 0

for (let i = 0; i < score.length; i++) {
    sum = sum + score[1]
}

let avg = sum / score.length
console.log("Total: ", sum)
console.log("Avg: ", avg)