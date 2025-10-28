let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");

console.log("Are symbols equal?", sym1 === sym2); // false
// Explanation: even with same description, each Symbol is unique.