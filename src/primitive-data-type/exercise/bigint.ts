let big1: bigint = 9007199254740991n; // Number.MAX_SAFE_INTEGER
let big2: bigint = 1000n;
let bigSum: bigint = big1 + big2;

console.log("BigInt sum:", bigSum); // 9007199254741991n

// ❌ Mixing bigint with number is not allowed:
// let bad = big1 + 5; // Error: Cannot mix BigInt and other types
// Explanation: Use 'n' suffix and only do math BigInt ↔ BigInt.