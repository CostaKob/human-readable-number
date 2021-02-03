module.exports = function toReadable(number) {
    const num1 = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    }

    const num2 = {
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    }

    const tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }

    let numToString = number.toString().split("")
    // 0-9
    if (numToString.length === 1) {
        return num1[number]
    }
    if (numToString.length === 2) {
        let tensNum = parseInt(numToString[0])
        let unitsNum = parseInt(numToString[1])
        // 11-19
        if (tensNum === 1 && unitsNum !== 0) {
            return num2[unitsNum]
        }
        // 10..90
        if (unitsNum === 0) {
            return tens[tensNum]
        }
        // other
        else {
            return `${tens[tensNum]} ${num1[unitsNum]}`
        }
    }
    if (numToString.length === 3) {
        let hundreds = parseInt(numToString[0])
        let tensNum = parseInt(numToString[1])
        let unitsNum = parseInt(numToString[2])

        if (tensNum === 0 && unitsNum === 0) {
            return `${num1[hundreds]} hundred`
        }
        if (unitsNum === 0) {
            return `${num1[hundreds]} hundred ${tens[tensNum]}`
        }
        if (tensNum === 1) {
            return `${num1[hundreds]} hundred ${num2[unitsNum]}`
        }
        if (tensNum === 0) {
            return `${num1[hundreds]} hundred ${num1[unitsNum]}`
        }
        else {
            return `${num1[hundreds]} hundred ${tens[tensNum]} ${num1[unitsNum]}`
        }
    }
}
