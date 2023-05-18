function printEven(maxNum){
    for (let i = 0; i <= maxNum; i++) {
        i%2 === 0 ? console.log("printEven: ",i) : null
    }
}

function multiplicationTable(numTimes){
    for (let i = 1; i <= 10; i++) {
        console.log("multiplicationTable: ", numTimes*i)
    }
}

function KMtoMiles(KM){
    return KM*1.609
}

function sumArray(array){
    let sum = 0.0
    array.forEach(e => sum += e)
    return sum
}

printEven(10)
multiplicationTable(12)
console.log("KMtoMiles", KMtoMiles(10))
console.log("sumArray", sumArray([10,-1,0.5,3]))