let {returnTwo, greeting, add, subtract, multiply, divide} = require("./functions")

describe("math functions test", () => {
    test("test add", () =>{
        expect(add(1, 2)).toBe(3)
        expect(add(1, 14)).toBe(15)
    })
    test("test subtract", () =>{
        expect(subtract(1, 2)).toBe(-1)
        expect(subtract(1, 14)).toBe(-13)
    })
    test("test multiply", () =>{
        expect(multiply(1, 2)).toBe(2)
        expect(multiply(1, 14)).toBe(14)
    })
    test("test divide", () =>{
        expect(divide(2, 2)).toBe(1)
        expect(divide(28, 14)).toBe(2)
    })
})

test("test returnTwo", () => {
    expect(returnTwo()).toBe(2)
})
test("test greeting", () => {
    expect(greeting("ryan")).toBe("Hello, ryan")
    expect(greeting("alec")).toBe("Hello, alec")
})