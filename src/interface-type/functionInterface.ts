interface Greeter{
    (message: string): void;
}
const greet: Greeter = (name)=> {
    return `Hello, ${name}!`;
};
console.log(greet("World"));