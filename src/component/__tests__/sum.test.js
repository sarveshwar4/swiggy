import {sum} from "../sum"
test("sum fun should calculate the sum of two number", ()=>{
      const result = sum(3, 4);
      expect(result).toBe(7); // this line is known as assertion
});