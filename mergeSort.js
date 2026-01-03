// Merge Sort Module - Recursive Implementation

/**
 * Merge two sorted arrays into one sorted array
 * @param {number[]} left - Left sorted array
 * @param {number[]} right - Right sorted array
 * @returns {number[]} Merged and sorted array
 */
function merge(left, right) {
  const result = [];
  // Create left and right fingers pointing at the start of each subarray
  let leftIndex = 0;
  let rightIndex = 0;

  // While my left finger hasn't reached the end of left array, and same for right finger
  while (leftIndex < left.length && rightIndex < right.length) {
    // If the number my left finger is pointing at is smaller than the right
    if (left[leftIndex] <= right[rightIndex]) {
      // Push that number first and move finger to the next number
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      // Otherwise left is larger, push the number my right finger is pointing at, then move to next number
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

/**
 * Sort an array using recursive merge sort
 * @param {number[]} array - Array to sort
 * @returns {number[]} Sorted array
 */
function mergeSort(array) {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (array.length <= 1) {
    return array;
  }

  // Divide: split array into two halves
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Conquer: recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

export { mergeSort };
