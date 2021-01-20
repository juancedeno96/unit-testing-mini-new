const { sum, sayHello } = require("../utils/functions");

test("sayHello returns a string of hello when invoked", () => {
  expect(sayHello()).toBe("hello");
});

test ('sum function returns 3 when bassed 1 & 2', ()=> {
    expect(sum(1,2)).toBe(3)
});

test('sum function deos not return NaN when passed 2 & 4', ()=>{
    expect(sum(2,4)).not.toBeNaN()
})
