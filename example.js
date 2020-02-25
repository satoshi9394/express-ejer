function sum(num1, num2) {
    return Number(num1) + Number(num2)
}

var result = sum (process.argv[2], process.argv[3]);
// el numero de argumento es por que cuenta los escritos como array

console.log(result)
