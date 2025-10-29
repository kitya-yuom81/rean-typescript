/**
 * ==============================
 * 🧱 INTERFACE vs 🧩 TYPE in TypeScript
 * ==============================
 *
 * Interfaces are mainly for defining the *shape* of objects.
 * Types are more flexible — they can describe objects, primitives, functions, and unions.
 *
 * This example shows both, side by side.
 */

/**
 * 🧱 Interface Example
 * - Defines the structure of an object.
 * - Can be extended (inherit from other interfaces).
 * - Can be merged automatically if declared twice.
 */
interface User {
  id: number;
  name: string;
  email?: string; // optional property
}

/**
 * Another interface extending 'User'
 * - Adds more properties to the existing structure.
 */
interface Admin extends User {
  role: "admin" | "user";
}

// ✅ Using the interface
const admin: Admin = {
  id: 1,
  name: "John",
  email: "john@mail.com",
  role: "admin",
};

/**
 * 🧩 Type Example
 * - Can describe objects, primitives, unions, intersections, and functions.
 * - Cannot be merged, but can be combined with '&' (intersection).
 */
type Product = {
  name: string;
  price: number;
  stock: number;
};

/**
 * Type alias for union values (can hold multiple possible types)
 */
type ProductStatus = "available" | "out-of-stock" | "discontinued";

/**
 * Intersection type example
 * Combines multiple types into one new type.
 */
type StoreProduct = Product & { status: ProductStatus };

// ✅ Using the type
const laptop: StoreProduct = {
  name: "MacBook Pro",
  price: 2500,
  stock: 15,
  status: "available",
};

/**
 * 🧩 Type can also define primitive or function shapes directly
 */
type ID = number | string; // primitive union

type Add = (a: number, b: number) => number; // function type

const addNumbers: Add = (a, b) => a + b;

/**
 * 🧾 Summary:
 * - Use `interface` for defining object structures (models, API responses).
 * - Use `type` when you need unions, intersections, primitives, or function signatures.
 *
 * ✅ Interface = Object blueprints 🧱
 * ✅ Type = Shape-shifting flexibility 🧩
 */
