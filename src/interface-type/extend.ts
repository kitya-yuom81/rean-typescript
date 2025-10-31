interface Person {
    name: string;
}
interface Employee extends Person {
    salary: number;
}
const employee: Employee = {
    name: "John Doe",
    salary: 50000,
};
console.log(employee);