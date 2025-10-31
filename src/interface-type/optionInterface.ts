interface Products{
    id ?: number | string;
    name ?: string;
    price ?: number;
    stock ?: number | "unlimited";
    isAvailable ?: boolean;
    priceIn : number;
}
const laptop: Products = {
    priceIn: 1500,
    id: 2002,
    name: "Laptop Pro",};
console.log(laptop)