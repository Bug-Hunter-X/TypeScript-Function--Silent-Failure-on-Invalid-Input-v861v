function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(0); // This will not print anything, but doesn't throw an error. It should ideally throw an error or print a message indicating that n must be > 0
printNumbers(-1); // This will also not print anything, but doesn't throw an error. It should ideally throw an error or print a message indicating that n must be > 0