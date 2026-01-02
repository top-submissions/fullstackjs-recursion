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
