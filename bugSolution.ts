function printNumbers(n: number): void {
  if (n <= 0) {
    throw new Error("Input must be a positive number.");
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Example usage
printNumbers(5); // Prints 1 to 5

try {
  printNumbers(0); // Throws an error
} catch (e) {
  console.error(e);
}

try {
  printNumbers(-1); // Throws an error
} catch (e) {
  console.error(e);
}

