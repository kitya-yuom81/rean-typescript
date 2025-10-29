interface Product {
    id: number | string;
    name: string;
    price: number;
    stock: number | "unlimited";
    isAvailable: boolean;

}
const phone: Product = {
    id: "P1001",
    name: "Smartphone X",
    price: 999,
    stock: "unlimited",
    isAvailable: true,
}

console.log(phone)