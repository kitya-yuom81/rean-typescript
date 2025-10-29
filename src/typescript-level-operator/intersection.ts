type Name = {
    name: string

};
type Age = {
    age: number
};
type Person = Name & Age;
const p: Person = {
    name: "Alice",
    age: 30
};
console.log(p);