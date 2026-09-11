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
                throw new Error ("Cannot divide by zero")
            }
            return divident/ divisor;
        } catch (error) {
            if(error instanceof Error){
                console.error("Division Failed: ", error.message)
            }
            return null;
        }
    }
    percentage(value: number, total: number) : number | null{
        try {
            if(total===0) {
                throw new Error("Total Cannot be zero");
            }
            return Number(((value/total)*100).toFixed(2));
        } catch (error) {
            if(error instanceof Error){
                console.error("Percentage Calculation Failed: ", error.message);
            }
            return null;
        }
    }
}
