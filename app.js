let result = 0
let firstNumber = 0
let secondNumber = 0
let operation = '+'
const nun1 = document.querySelector(".number__1")
const nunDot = document.querySelector(".number__dot")
const nun2 = document.querySelector(".number__2")
const nun3 = document.querySelector(".number__3")
const nun4 = document.querySelector(".number__4")
const nun5 = document.querySelector(".number__5")
const nun6 = document.querySelector(".number__6")
const nun7 = document.querySelector(".number__7")
const nun8 = document.querySelector(".number__8")
const nun9 = document.querySelector(".number__9")
const nun0 = document.querySelector(".number__0")
const nunMult = document.querySelector(".number__multiplay")
const nunCancel = document.querySelector(".number__cancel")
const nunMinus = document.querySelector(".number__minus")
const nunDivide = document.querySelector(".number__divide")
const nunEqual = document.querySelector(".number__equal")
const nunPlus = document.querySelector(".number__plus")
const display = document.querySelector(".calc__display-text")
let displayText = display.textContent.trim()
nun1.addEventListener('click', () => {
    display.textContent += '1'
})
nun2.addEventListener('click', () => {
    display.textContent += '2'
})
nun3.addEventListener('click', () => {
    display.textContent += '3'
})
nun4.addEventListener('click', () => {
    display.textContent += '4'
})
nun5.addEventListener('click', () => {
    display.textContent += '5'
})
nun6.addEventListener('click', () => {
    display.textContent += '6'
})
nun7.addEventListener('click', () => {
    display.textContent += '7'
})
nun8.addEventListener('click', () => {
    display.textContent += '8'
})
nun9.addEventListener('click', () => {
    display.textContent += '9'
})
nun0.addEventListener('click', () => {
    display.textContent += '0'
})
nunDot.addEventListener('click', () => {
    display.textContent += '.'
})
nunCancel.addEventListener('click', () => {
    display.textContent = ''
})

nunPlus.addEventListener('click', plas)
nunMult.addEventListener('click', multiply)
nunMinus.addEventListener('click', minus)
nunDivide.addEventListener('click', divide)
nunEqual.addEventListener('click', () => {
    secondNumber = display.textContent
    switch (operation) {
        case "+":
            result = firstNumber + secondNumber
            break;
        case "-":
            result = firstNumber - secondNumber
            break;
        case "*":
            result = firstNumber * secondNumber
            break;
        case "/":

            if (secondNumber == 0) {
                result = 'ты кто'
            } else {
                result = firstNumber / secondNumber
            }
            break;
    }
    display.textContent = result
    firstNumber = 0
    secondNumber = 0
    result = 0


})

function plas() {
    firstNumber = display.textContent
    console.log(firstNumber)
    display.textContent = ''
    operation = '+'
}

function minus() {
    firstNumber = display.textContent
    operation = '-'
    display.textContent = ''
}

function multiply() {
    firstNumber = display.textContent
    operation = '*'
    display.textContent = ''

}

function divide() {
    firstNumber = display.textContent
    operation = '/'
    display.textContent = ''

}