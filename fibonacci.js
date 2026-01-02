// Fibonacci Module - Iterative and Recursive Implementations

/**
 * Generate Fibonacci sequence using iteration
 * @param {number} n - Number of Fibonacci numbers to generate
 * @returns {number[]} Array containing n Fibonacci numbers
 */
function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

/**
 * Generate Fibonacci sequence using recursion
 * @param {number} n - Number of Fibonacci numbers to generate
 * @param {number[]} sequence - Accumulator array (for internal use)
 * @returns {number[]} Array containing n Fibonacci numbers
 */
function fibsRec(n, sequence = [0, 1]) {
  // Uncomment line below to visualize recursive calls
  // console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (sequence.length >= n) return sequence;

  const len = sequence.length;
  sequence.push(sequence[len - 1] + sequence[len - 2]);

  return fibsRec(n, sequence);
}

export { fibs, fibsRec };
