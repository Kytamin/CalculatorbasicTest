import {Calculator} from "../Calculator";

describe("BasicCalculatorTest",()=>{
    let Cal:Calculator= new Calculator()
    test('should return an instance of a basic calculator', () => {
        expect(Cal).toEqual({});
    });
    test("return number1+number2",()=>{
        expect(Cal.plus(2,2)).toEqual(4)
    })
    test("return number1*number2",()=>{
        expect(Cal.times(2,3)).toEqual(6)
    })
    test("return number1 - number2",()=>{
        expect(Cal.minus(6,6)).toEqual(0)
    })
    test("return number1/number2",()=>{
        expect(Cal.split(9,3)).toEqual(3)
    })
})
