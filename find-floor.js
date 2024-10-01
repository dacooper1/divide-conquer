function findFloor(arr, target) {
  let low = 0
  let high = arr.length - 1
  let mid = Math.floor((low + high)/2)
  while (low <= high) {
    if (arr[mid] === target) {
        return arr[mid] - 1
    } else if (arr[mid] > target) {
        high = mid - 1
    } else if (arr[mid < target]) {
        low = mid + 1
    }
  }
  return -1;
}

findFloor([1,2,8,10,10,12,19], 9)

module.exports = findFloor