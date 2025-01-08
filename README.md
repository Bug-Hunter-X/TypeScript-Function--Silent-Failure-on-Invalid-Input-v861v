# TypeScript Function: Silent Failure on Invalid Input

This repository demonstrates a common issue in TypeScript where functions might silently fail when provided with invalid input, instead of throwing an error or providing informative feedback.

## Bug Description

The `printNumbers` function is designed to print numbers from 1 to n. However, it doesn't handle cases where 'n' is 0 or negative gracefully.  Instead of throwing an error or displaying a message, it simply does nothing. This silent failure can be hard to debug.

## Bug Solution

The solution involves adding input validation to the function to check if 'n' is a positive number. If not, it will throw a more descriptive error, aiding in debugging and preventing unexpected behavior.

## How to reproduce
1. Clone this repository.
2. Run the `bug.ts` file using a TypeScript compiler (tsc) and a Node.js runtime (node). Observe that there's no error or message when input is 0 or negative.
3. Run the `bugSolution.ts` file to see the improved version.