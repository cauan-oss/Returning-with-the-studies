function verifyNumber(number) {
    if(typeof number !== "number") {
        console.log("o valor e diferente")
    }
    return number
}

console.log(verifyNumber("a"))