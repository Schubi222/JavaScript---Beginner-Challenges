
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

function reverseArray(array){
    let newArray = []
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray
}

function reverseArrayInPlace(array){
    const length =  array.length-1
    for (let i = length; i >= Math.ceil(length/2); i--) {
        const backNumber = array[i]
        const frontNumber = array[length-i]
        array[length-i] = backNumber
        array[i] = frontNumber

    }
    return array
}

printEven(10)
multiplicationTable(12)
console.log("KMtoMiles: ", KMtoMiles(10))
console.log("sumArray: ", sumArray([10,-1,0.5,3]))
console.log("reverseArray: ", reverseArray([1,2,3,4,5,6,7,8,9,10]))
console.log("reverseArrayInPlace: ", reverseArrayInPlace([1,2,3,4,5,6,7,8,9,10,11]))