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

function checkChar(char, num) {
  let baseUnicode
  let upperCaseUnicode = "A".charCodeAt()
  let lowerCaseUnicode = "a".charCodeAt()
  let charUnicode = char.charCodeAt()
  if (upperCaseUnicode <= charUnicode && charUnicode < upperCaseUnicode + 26) {
    baseUnicode = upperCaseUnicode
  } else if (lowerCaseUnicode <= charUnicode && charUnicode < lowerCaseUnicode + 26) {
    baseUnicode = lowerCaseUnicode
  } else {
    return char
  }

  let position = charUnicode - baseUnicode
  let newPosition = (position + num) % 26
  let newChar = String.fromCharCode(baseUnicode + newPosition)

  return newChar
}

function caesarCipher(string) {
  const num = 1
  let stringArray = [...string]
  let newArray = stringArray.reduce((total, char) => {
    let newChar = checkChar(char, num)
    return total.concat(newChar)
  }, [])
  let newString = newArray.join("")
  return newString
}

function getAverage(array) {
  const total = array.reduce((total, curr) => total + curr, 0)
  const average = total / array.length

  return average
}


function analyzeArray(array) {
  let object = {
    average: getAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }

  return object
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }