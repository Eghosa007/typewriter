const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  
  delay += 50; // Adjust the delay as needed
}

// Add a newline character after the animation is complete
setTimeout(() => {
  console.log(); // This will add a newline character
}, delay);

