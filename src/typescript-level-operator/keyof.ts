interface Product{
    id: number;
    name: string;
    price: number;
}
type ProductKeys = keyof Product; // "id" | "name" | "price"
let key: ProductKeys = "name";
console.log(key);
