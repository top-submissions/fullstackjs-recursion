# Recursion Project

[![GitHub License](https://img.shields.io/github/license/top-submissions/fullstackjs-recursion)](https://github.com/top-submissions/fullstackjs-recursion/blob/main/LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

> Master recursion through classic algorithms: Fibonacci sequence generation and Merge Sort implementation

## About

This project explores **recursion** through two fundamental computer science problems as part of [The Odin Project](https://www.theodinproject.com/)'s Full Stack JavaScript curriculum.

**Algorithms implemented:**

1. **Fibonacci Sequence** - Both iterative and recursive implementations
2. **Merge Sort** - Recursive divide-and-conquer sorting algorithm

## Prerequisites

- **Node.js** >= 14.0.0 - [Download here](https://nodejs.org/)

## Usage

### Run All Tests

```bash
node index.js
```

### Run Individual Modules

**Fibonacci:**

```bash
node -e "import('./fibonacci.js').then(m => console.log(m.fibs(8)))"
node -e "import('./fibonacci.js').then(m => console.log(m.fibsRec(8)))"
```

**Merge Sort:**

```bash
node -e "import('./mergeSort.js').then(m => console.log(m.mergeSort([3,2,1,13,8,5,0,1])))"
```

## Algorithm Examples

### Fibonacci Sequence

**Iterative:**

```javascript
fibs(8)  // Returns: [0, 1, 1, 2, 3, 5, 8, 13]
```

**Recursive:**

```javascript
fibsRec(8)  // Returns: [0, 1, 1, 2, 3, 5, 8, 13]
```

### Merge Sort

**Test Cases:**

```javascript
mergeSort([])                          // Returns: []
mergeSort([73])                        // Returns: [73]
mergeSort([1, 2, 3, 4, 5])            // Returns: [1, 2, 3, 4, 5]
mergeSort([3, 2, 1, 13, 8, 5, 0, 1])  // Returns: [0, 1, 1, 2, 3, 5, 8, 13]
mergeSort([105, 79, 100, 110])        // Returns: [79, 100, 105, 110]
```

**Complexity:**

- Time: O(n log n)
- Space: O(n)

## Implementation Details

### Fibonacci

- **Iterative approach** uses a loop to build the sequence
- **Recursive approach** uses function calls with an accumulator array
- Both handle edge cases (n = 0, n = 1)

### Merge Sort

- Uses **divide-and-conquer** strategy
- Recursively splits arrays until reaching single elements
- Merges sorted subarrays back together
- Handles arrays with duplicates and negative numbers

## Key Concepts Used

- **Recursion** - Functions calling themselves with modified parameters
- **Base cases** - Conditions to stop recursive calls
- **Array methods** - `slice()`, `push()`, `length`
- **ES6 modules** - `import`/`export` syntax
- **Helper functions** - `merge()` for combining sorted arrays

## Testing

All test cases from The Odin Project assignment are included in `index.js`:

- Empty arrays
- Single elements
- Already sorted arrays
- Reverse sorted arrays
- Arrays with duplicates

## License

This project is licensed under the MIT License.

## Learning Outcomes

The things I learned from this project are:

- Using `slice` array function to split an array for merge sort
- Sorting each subarray (left and right) via recursion

---

**Part of The Odin Project: Full Stack JavaScript Path**
