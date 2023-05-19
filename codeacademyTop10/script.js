
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

function filterNegatives(array){
    array.forEach(e => {
        if (e < 0) {
            array.splice(array.indexOf(e),1)
        }
    })
    return array
}

function filterNegativesUsingFilter(array){
    return array.filter(num => num >= 0)
}

function removeWitheSpace(str){
    return str.replaceAll(' ','')
}

function isDivisible(number, divider){
    return number%divider === 0
}

function numOVowels(str){
    const vowels = ['a','e','i','o','u']
    str.toLocaleLowerCase();
    let result = 0;
    [...str].forEach(char =>  vowels.includes(char) ? result+=1 : '')
    return result
}

//Probably a bit more performant
function numOVowelsWithoutArrayCreation(str){
    const vowels = ['a','e','i','o','u']
    str.toLocaleLowerCase();
    let result = 0;
    for (let c in str){
        vowels.includes(c) ? result+=1 : null
    }
    return result
}

printEven(10)
multiplicationTable(12)
console.log("KMtoMiles: ", KMtoMiles(10))
console.log("sumArray: ", sumArray([10,-1,0.5,3]))
console.log("reverseArray: ", reverseArray([1,2,3,4,5,6,7,8,9,10]))
console.log("reverseArrayInPlace: ", reverseArrayInPlace([1,2,3,4,5,6,7,8,9,10,11]))
console.log("filterNegatives: ", filterNegatives([1,-2,3,4,-5,6,7,-8,9,10,11, -0.5]))
console.log("filterNegativesUsingFilter: ", filterNegativesUsingFilter([1,-2,3,4,-5,6,7,-8,9,10,11, -0.5]))
console.log("removeWitheSpace: ", removeWitheSpace("T His  I S  IT"))
console.log("isDivisible: ", isDivisible(20,10))
console.log("numOVowels: ", numOVowels("abcdef1 e"))
console.log("numOVowelsWithoutArrayCreation: ", numOVowels("abcdef1 e"))