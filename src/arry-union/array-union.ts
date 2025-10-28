/**
 * 🧠 TypeScript Array + Union Examples (with answers)
 * ---------------------------------------------------
 * Learn how arrays and union types work together in TypeScript.
 * Each section includes code + output comments.
 */

// ---------------------------------------------------
// 1️⃣ Normal Array (Single Type)
// ---------------------------------------------------

let numbers: number[] = [1, 2, 3, 4];
numbers.push(5); // ✅ Only numbers allowed
console.log("Numbers:", numbers); // 👉 Output: Numbers: [1, 2, 3, 4, 5]

let fruits: string[] = ["apple", "banana", "mango"];
fruits.push("orange"); // ✅ Only strings allowed
console.log("Fruits:", fruits); // 👉 Output: Fruits: ['apple', 'banana', 'mango', 'orange']

// ❌ Error example:
// fruits.push(10); // Error: number not allowed in a string array
// Explanation: `fruits` accepts only strings



// ---------------------------------------------------
// 2️⃣ Union Type (Single Variable with multiple types)
// ---------------------------------------------------

let id: number | string = 101; // Can be number OR string
console.log("ID (number):", id); // 👉 Output: ID (number): 101

id = "A202"; // ✅ OK — now a string
console.log("ID (string):", id); // 👉 Output: ID (string): A202

// ❌ id = true; // Error: boolean not allowed here
// Explanation: This variable can only be number or string, not both



// ---------------------------------------------------
// 3️⃣ Array with Union Inside → (number | string)[]
// ---------------------------------------------------

let mixed: (number | string)[] = [1, "two", 3, "four"];

mixed.push(5);       // ✅ number allowed
mixed.push("six");   // ✅ string allowed
// mixed.push(true); // ❌ boolean not allowed
console.log("Mixed array:", mixed); 
// 👉 Output: Mixed array: [1, 'two', 3, 'four', 5, 'six']

/**
 * 💬 Explanation:
 * This array allows numbers and strings together.
 * Each element can be either type, but nothing else.
 */



// ---------------------------------------------------
// 4️⃣ Union of Arrays → number[] | string[]
// ---------------------------------------------------

let ids: number[] | string[];

// ✅ Case 1: all numbers
ids = [1, 2, 3];
console.log("IDs (numbers):", ids); // 👉 Output: IDs (numbers): [1, 2, 3]

// ✅ Case 2: all strings
ids = ["A101", "B202"];
console.log("IDs (strings):", ids); // 👉 Output: IDs (strings): ['A101', 'B202']

// ❌ ids = [1, "B202"]; // Error: mixed types not allowed here
/**
 * 💬 Explanation:
 * The variable 'ids' can be an array of numbers or strings,
 * but not a mix of both types in the same array.
 */



// ---------------------------------------------------
// 5️⃣ Function with Array + Union
// ---------------------------------------------------

function printItems(items: (string | number)[]): void {
  for (let item of items) {
    console.log("Item:", item);
  }
}

printItems(["apple", 10, "banana", 20]);
/**
 * 👉 Output:
 * Item: apple
 * Item: 10
 * Item: banana
 * Item: 20
 *
 * 💬 Explanation:
 * Function accepts an array with mixed string/number values.
 * Loops through and prints each item safely.
 */



// ---------------------------------------------------
// 6️⃣ Real-life Example — Product IDs
// ---------------------------------------------------

let productIds: (number | string)[] = [101, "A202", 303, "B404"];
console.log("Product IDs:", productIds); 
// 👉 Output: Product IDs: [101, 'A202', 303, 'B404']

function findId(id: number | string) {
  console.log(`Finding product with ID: ${id}`);
}

findId(101);     // 👉 Output: Finding product with ID: 101
findId("A202");  // 👉 Output: Finding product with ID: A202

/**
 * 💬 Explanation:
 * Useful for systems that mix numeric and alphanumeric IDs.
 */



// ---------------------------------------------------
// ✅ Summary (for quick review)
// ---------------------------------------------------

/**
 * Summary Table
 * -------------
 * Type                          | Example                        | Meaning
 * ------------------------------|--------------------------------|------------------------------------------
 * number[]                      | [1, 2, 3]                      | Array of only numbers
 * string[]                      | ["a", "b", "c"]                | Array of only strings
 * number | string               | let id = 5; id = "A5";         | One variable can be number or string
 * (number | string)[]           | [1, "two", 3]                  | Mixed array (both number & string)
 * number[] | string[]           | [1,2,3] or ["a","b"]           | One type of array at a time
 * function print(...: (number|string)[]) | print(["a", 2])       | Function accepts mixed-type arrays
 */



// ---------------------------------------------------
// 🎯 Mini Challenge Example (with comments)
// ---------------------------------------------------

let userInputs: (string | number | boolean)[] = [];

// Add different types
userInputs.push("Tttt");   // ✅ string
userInputs.push(21);       // ✅ number
userInputs.push(true);     // ✅ boolean

console.log("User Inputs:", userInputs); 
// 👉 Output: User Inputs: ['Tttt', 21, true]

/**
 * 💬 Explanation:
 * Using union inside [] allows multiple types together.
 * Here, each array element can be string, number, or boolean.
 */
