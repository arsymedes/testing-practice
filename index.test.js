import { capitalize, reverseString, calculator, caesarCipher } from "./index.js"

test("capitalize: all lowercase", () => {
  expect(capitalize("momen multipol")).toBe("Momen multipol")
});

test("capitalize: all uppercase", () => {
  expect(capitalize("MOMEN MULTIPOL")).toBe("MOMEN MULTIPOL")
});

test("reverseString: normal string", () => {
  expect(reverseString("Momen Multipol")).toBe("lopitluM nemoM")
})

test("reverseString: palindrome", () => {
  expect(reverseString("racecar")).toBe("racecar")
})

test("calculator: Add 2 Number", () => {
  expect(calculator.add(1, 1)).toBe(2)
})

test("calculator: Subtract 2 Number", () => {
  expect(calculator.subtract(5, 1)).toBe(4)
})

test("calculator: Multiply 2 Number", () => {
  expect(calculator.multiply(6, 2)).toBe(12)
})

test("calculator: Divide 2 Number", () => {
  expect(calculator.divide(25, 5)).toBe(5)
})

test("caesarCipher: wrapping", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe("bcdefghijklmnopqrstuvwxyza")
})

test("caesarCipher: Case", () => {
  expect(caesarCipher("Momen Multipol")).toBe("Npnfo Nvmujqpm")
})

test("caesarCipher: Punctuation", () => {
  expect(caesarCipher(";.,'[]")).toBe(";.,'[]")
})