// Main Test Runner for Recursion Project

import { fibs, fibsRec } from './fibonacci.js';
import { mergeSort } from './mergeSort.js';

console.log('='.repeat(50));
console.log('FIBONACCI SEQUENCE TESTS');
console.log('='.repeat(50));

console.log('\n--- Iterative Implementation (fibs) ---');
console.log('fibs(8):', fibs(8));
console.log('fibs(2):', fibs(2));
console.log('fibs(0):', fibs(0));
console.log('fibs(15):', fibs(15));

console.log('\n--- Recursive Implementation (fibsRec) ---');
console.log('fibsRec(8):', fibsRec(8));
console.log('fibsRec(1):', fibsRec(1));
console.log('fibsRec(0):', fibsRec(0));
console.log('fibsRec(15):', fibsRec(15));

console.log('\n' + '='.repeat(50));
console.log('MERGE SORT TESTS');
console.log('='.repeat(50));

// Test cases from The Odin Project
const testCases = [
  { input: [], expected: [] },
  { input: [73], expected: [73] },
  { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { input: [3, 2, 1, 13, 8, 5, 0, 1], expected: [0, 1, 1, 2, 3, 5, 8, 13] },
  { input: [105, 79, 100, 110], expected: [79, 100, 105, 110] },
];

testCases.forEach(({ input, expected }, index) => {
  const result = mergeSort([...input]);
  const passed = JSON.stringify(result) === JSON.stringify(expected);

  console.log(`\nTest ${index + 1}: ${passed ? 'PASS' : 'FAIL'}`);
  console.log('Input:', input);
  console.log('Output:', result);
  console.log('Expected:', expected);
});

console.log('\n--- Additional Tests ---');
console.log('Negative numbers:', mergeSort([-5, -1, -10, 0, 3, -2]));
console.log('Duplicates:', mergeSort([5, 2, 8, 2, 9, 1, 5, 5]));
console.log('Large array:', mergeSort([64, 34, 25, 12, 22, 11, 90]));

console.log('\n' + '='.repeat(50));
console.log('ALL TESTS COMPLETE');
console.log('='.repeat(50));
