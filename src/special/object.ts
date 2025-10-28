let user: object = {
    name: "John",
    age: 25
};

console.log("User Object:", user);
let greetFn: object = function() {
    console.log("Hello, World!");
}
console.log("Array object:", user);

(greetFn as Function)(); // Casting to run it
