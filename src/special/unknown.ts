// 2️⃣ unknown → like any, but must check before using
let maybe: unknown = "Hi bro!";
if (typeof maybe === "string") {
  console.log("unknown:", maybe.toUpperCase()); // must check type
}
/**
 * ✅ Simple Summary — any vs unknown
 *
 * @type any
 * - Can be anything, no checking required.
 * - TypeScript will not warn you about incorrect usage.
 * - ⚠️ Use carefully — can cause runtime errors.
 *
 * Example:
 * let x: any = 5;
 * x = "hi";              // ✅ Works
 * x.toUpperCase();       // ❌ No TypeScript error, but runtime crash if not a string.
 *
 *
 * @type unknown
 * - Can also be anything, BUT you must check the type before using.
 * - Safer than 'any' because TypeScript forces type checking.
 *
 * Example:
 * let x: unknown = "hi";
 * if (typeof x === "string") {
 *   console.log(x.toUpperCase());  // ✅ Safe after check
 * }
 * // x.toUpperCase(); // ❌ Error: Object is of type 'unknown'
 */
