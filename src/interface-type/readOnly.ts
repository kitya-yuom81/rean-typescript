interface Student {
    readonly id: number | string;
    readonly name: string;
    readonly age: number;
    readonly grade: string;



}
const student: Student = {
    id: 101,
    name: "Alice",
    age: 20,
    grade: "A",
};
student.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.