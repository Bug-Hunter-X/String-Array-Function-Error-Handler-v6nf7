# Type Error: Passing Array to Function Expecting String

This repository demonstrates a common TypeScript error and its solution.

The `bug.ts` file contains code that attempts to pass an array to a function that expects a string as input.  This results in a type error.

The `bugSolution.ts` file provides a corrected version of the code that handles the array input correctly.

## Running the Code

1. Clone this repository.
2. Navigate to the repository directory.
3. Compile and run the code using the TypeScript compiler (tsc) and Node.js (node):
   ```bash
tsc bug.ts && node bug.js
tsc bugSolution.ts && node bugSolution.js
   ```