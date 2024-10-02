// This function inserts an item at a specific index in an array.
// It shifts the elements to the right to accommodate the new item.
function arrayInsertion(array, index, item) {
  let length = array.length + 1; // Calculate the new length after insertion
  for (let i = index; i < length; i++) {
    let temp = array[i]; // Store the current element
    array[i] = item; // Insert the new item
    item = temp; // Move the old item to the next position
  }
  return array; // Return the modified array
}

// This function inserts an item into a new array created from the original.
// It does not modify the original array.
function arraySortInsert(array, item) {
  let left = array.slice(0, 2); // Create a new array with the first two elements
  let right = array.slice(2); // Slice the remainder of the original array
  left.push(item); // Add the new item to the left array
  let concat = [...left, ...right]; // Concatenate the two arrays
  return concat; // Return the new array
}

// This function inserts items at a specified index in the original array.
// It handles multiple items by shifting subsequent elements.
function arraySort(array, item) {
  let length = array.length + 1; // Calculate the new length after insertion
  for (let i = item - 1; i < length; i++) {
    let temp = array[i]; // Store the current element
    array[i] = item; // Insert the new item
    item = temp; // Move the old item to the next position
  }
  return array; // Return the modified array
}

// This function inserts a sub-array into an array at a specified index.
// It shifts elements to make space for the sub-array.
function insertTwoOrMore(array, subArray, index) {
  let length = array.length + subArray.length; // Calculate the new length after insertion
  for (let i = index; i < length; i++) {
    let temp = array[i]; // Store the current element
    array[i] = subArray.shift(); // Insert the next element from the sub-array
    subArray.push(temp); // Move the old item to the end of the sub-array
  }
  return array; // Return the modified array
}

// ******************** Deletion Methods *********************** 

// This function deletes a specified item from the array.
// It has a time complexity of O(n), as it iterates through the array.
function deleteFromArray(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) { // Check if the current item matches the one to delete
      array[i] = array[i + 1]; // Shift the next item into the current position
      array.length--; // Reduce the array length to remove the last element
    }
  }
  return array; // Return the modified array
}

// This function deletes a portion of the array defined by start and end indices.
// It shifts elements left to fill the gap.
function deleteAnParticularItem(array, start, end) {
  let length = array.length - (end - start + 1); // Calculate the new length after deletion
  for (let i = start; i < length; i++) {
    array[i] = array[end + 1 + (i - start)]; // Shift elements left
  }
  array.length = length; // Update the array length
  return array; // Return the modified array
}

// This function searches for an item in the array.
// It returns the index if found; otherwise, it returns false.
// Time complexity is O(n), as it iterates through the array.
function searchingMostBasic(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) { // Check if the current item matches the search item
      return { index: i }; // Return the index of the found item
    }
  }
  return false; // Return false if the item is not found
}

// This function performs a binary search on a sorted array.
// It returns true if the item is found; otherwise, it returns -1.
// Time complexity is O(log n) for sorted arrays.
function binarySearch(array, item) {
  let arr = array.sort((a, b) => a - b); // Sort the array in ascending order

  let left = 0; // Initialize left pointer
  let right = array.length - 1; // Initialize right pointer

  while (left <= right) { // Continue while left pointer is less than or equal to right
    let mid = Math.floor((left + right) / 2); // Calculate the mid-point

    if (arr[mid] === item) return true; // Return true if the item is found
    else if (arr[mid] < item) left = mid + 1; // Move the left pointer to the right
    else right = mid - 1; // Move the right pointer to the left
  }
  return -1; // Return -1 if the item is not found
}

// This function finds two numbers in the array that sum up to a target value.
// It returns their indices as an array.
function twoSum(array, target) {
  let obj = new Map(); // Create a map to store numbers and their indices

  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i]; // Calculate the difference required to reach the target
    if (obj.has(diff)) { // Check if the difference exists in the map
      return [obj.get(diff), i]; // Return the indices of the two numbers
    } else {
      obj.set(array[i], i); // Store the current number and its index in the map
    }
  }
}

