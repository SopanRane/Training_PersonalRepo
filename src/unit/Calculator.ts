export class Calculator {
    add(a: number, b:number): number {
        return a+b;
    }

    subtract(a:number, b:number): number{
        return a-b;
    }

    multiply(a:number, b:number): number{
        return a*b;
    } 

    divide(divident:number, divisor:number): number | null {
        try {
            if(divisor===0){
                throw new Error ("Cannot devide by zero")
            }
            return divident/ divisor;
        } catch (error) {
            if(error instanceof Error){
                console.error("Division Failed: ", error.message)
            }
            return null;
        }
    }
}
