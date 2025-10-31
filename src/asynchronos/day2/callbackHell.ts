// callback-hell.ts
// Example of nested callbacks using setTimeout

// Start the first timeout
setTimeout(() => {
  console.log("Step 1");

  // Second level timeout (runs 1s after Step 1)
  setTimeout(() => {
    console.log("Step 2");

    // Third level timeout (runs 1s after Step 2)
    setTimeout(() => {
      console.log("Step 3");

      // Fourth level timeout (runs 1s after Step 3)
      setTimeout(() => {
        console.log("Step 4");
      }, 1000); // wait 1 second before Step 4

    }, 1000); // wait 1 second before Step 3

  }, 1000); // wait 1 second before Step 2

}, 1000); // wait 1 second before Step 1
