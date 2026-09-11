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
        expect(calculator.add(2.3, 6.3)).toBe(8.8)
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
    
})