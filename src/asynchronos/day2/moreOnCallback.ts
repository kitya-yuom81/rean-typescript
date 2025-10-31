// Define a function that accepts two parameters:
// 1️⃣ name: a string
// 2️⃣ callback: a function with no parameters and no return value
function greetUser(name: string, callback: () => void) {
  // Step 1: Print a greeting message
  console.log(`Hello, ${name}!`);

  // Step 2: Call (execute) the callback function passed in as an argument
  callback();
}

// Define the callback function — what we want to run after greeting
function showDone() {
  // This code runs when 'callback()' is executed inside greetUser
  console.log("✅ Greeting done!");
}

// Call the main function
// - "Tttt" goes into 'name'
// - 'showDone' goes into 'callback'
greetUser("Tttt", showDone);

// 🧠 Execution Flow:
// 1. greetUser("Tttt", showDone) is called
// 2. Prints "Hello, Tttt!"
// 3. Executes callback() → runs showDone()
// 4. Prints "✅ Greeting done!"
//
// ✅ Final Output:
// Hello, Tttt!
// ✅ Greeting done!
