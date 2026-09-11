import {test, expect} from "@playwright/test"
import { Calculator } from "../../src/unit/Calculator"

test.describe("Calculator- add()", () => {
    let calculator: Calculator;

    test.beforeEach(() => 
    {
        calculator = new Calculator();
    }); 

    test ("Verify addition of two positive numbers", () => {
        expect(calculator.add(4,5)).toBe(9);
    });

    test ("Verify addition of one positive and one negative number", () => {
        expect(calculator.add(-8, 12)).toBe(4);
    })

    test ("Verify addition of zero and positive number", () => {
        expect(calculator.add(0,12)).toBe(12);
    })

    test ("Verify addition of two zero numbers", () =>{
        expect(calculator.add(0,0)).toBe(0);
    } )

    test("Verify addition of two decimal numbers", () => {
        expect(calculator.add(2.3, 6.3)).toBe(8.6)
    })
})

test.describe("Calculator - substraction()", () => {

    let calculator: Calculator;

    test.beforeEach(() => {
        calculator= new Calculator();
    })

    test("Verify substraction of two positive numbers", () =>{
        expect(calculator.subtract(12, 9)).toBe(3)
    })
    
    test ("Verify substraction of one positive and one negative number.", ()=>{
        expect(calculator.subtract(-12, 9)).toBe(-21);
    })

    test("Verify substartion of two negative numbers.", () => {
        expect(calculator.subtract(-6, -8)).toBe(2);
    })
    
})

test.describe("Calculator -multiplication()", () => {
    let calculator: Calculator

    test.beforeEach(()=> {
        calculator= new Calculator();
    })

    test("Verify the multiplication of two positive numbers", () => {
        expect(calculator.multiply(12,2)).toBe(24);
    })

    test("Verify multiplication of one positive and one negative number", () => {
        expect(calculator.multiply(-5, 6)).toBe(-30);
    })

    test ("Verify the multiplcation of two negative numbers", () => {
        expect(calculator.multiply(-3,-12)).toBe(36);
    })

    test("Verify the multiplcation of two decimal number", () => {
        expect(calculator.multiply(2.4, 6.8)). toBe(16.32);
    })

    test("Verify the multiplcation of one positive number and zero", () => {
        expect(calculator.multiply(8,0)).toBe(0);
    })
})

test.describe("Calculator - Division()", () => {
     let calculator: Calculator

     test.beforeEach(() => {

        calculator= new Calculator();
     })

     test("Verify division of two positive numbers", () => {
        expect(calculator.divide(12,3)).toBe(4);
     })

     test("Verify the division with positive devident and zero divisor", () => {
        expect(calculator.divide(12,0)).toBe(null)
     })
     test("Verify division of zero by positive number", () => {
        expect(calculator.divide(0,12)).toBe(0);
     })

})

test.describe("Calculator - percentage()", () => {

    let calculator: Calculator

    test.beforeEach(() => {
        calculator = new Calculator();
    })

    test("Verify the percentage of a positive number ", () => {
        expect(calculator.percentage(12, 23)).toBe(52.17);
    })
})