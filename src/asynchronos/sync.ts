console.log("Start");
console.log("Step 1");
console.log("Step 2");
console.log("End");

console.log("start");
setTimeout(() => {
    console.log("This is asynchronous");
}, 1000);
console.log("end");