function printEven(maxNum){
    for (let i = 0; i <= maxNum; i++) {
        i%2 === 0 ? console.log(i) : null
    }
}

printEven(100)