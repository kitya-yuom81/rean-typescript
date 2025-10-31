// function multiply(a: number, b: number): number {
//   return a * b;
// }

// console.log("Start");
// const result = multiply(3, 2);
// console.log("Result:", result);
// console.log("End");


//callback

function multiply(a: number, b:number, callback: (resukt: number) => void): void {
    const result = a * b;
    callback(result);
}
console.log("Start");
multiply(3, 2, (value) => {
  console.log("Result:", value);
});
console.log("End");