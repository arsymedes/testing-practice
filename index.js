function capitalize(string) {
  let firstChar = string.slice(0, 1)
  let minusFirstChar = string.slice(1)
  return firstChar.toUpperCase() + minusFirstChar
}

function reverseString(string) {
  let stringArray = [...string]
  let reversedArray = stringArray.reverse()
  return reversedArray.join("")
}

const calculator = (() => {
  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return a - b
  }

  function multiply(a, b) {
    return a * b
  }

  function divide(a, b) {
    return a / b
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  }
})()

export { capitalize, reverseString, calculator }