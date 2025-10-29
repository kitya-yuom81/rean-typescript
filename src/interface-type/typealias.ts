type UserID = number | string;
type User = {
    id: UserID;
    name: string;
    email: string;
    role ?: "admin" | "user" | "guest";
    //?: optional property
}
const admin: User = {
    id: 1,
    name: "Alice", email: "kitya"}

console.log(admin)
