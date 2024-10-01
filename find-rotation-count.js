function findRotationCount(arr, low = 0, high = arr.length - 1) {
    // if the high index is less than the low index, the array is not rotated
    if (high < low) return 0;
  
    // if there is only one element, return its index
    if (high === low) return low;
  
    // calculate the midpoint of the array
    let mid = Math.floor((low + high) / 2);
  
    // checks if [mid + 1] is the minimum element
    if (mid < high && arr[mid + 1] < arr[mid]) {
      return mid + 1; // Return the index of the minimum element
    }
  
    // checks if [mid] is the minimum element
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid; // Return the index of the minimum element
    }
  
    // decide to search in the left half or the right half of the array
    if (arr[high] > arr[mid]) {
      // search in the left half
      return findRotationCount(arr, low, mid - 1);
    }
  
    // search in the right half
    return findRotationCount(arr, mid + 1, high);
  }
  
module.exports = findRotationCount