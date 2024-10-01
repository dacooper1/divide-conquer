function sortedFrequency(arr, target) {
    let low = 0 
    let high = arr.length - 1

    while (high >= low) {
        let mid = low + (Math.floor(high - low)/2)
        // checks if this is the last occurance, then sets high to last occurance 
        if (arr[mid] == target && arr[mid + 1] != target) {
            high = mid - 1
        // checks if this is the first occurance, then sets low to first occurance 
        } if (arr[mid] == target && arr[mid - 1] != target) {
            low = mid + 1
        // finds first occurance 
        } if (arr[mid] == target  && arr[mid - 1] == target){
            low = mid - 1
        // finds last  occurance
        } if (arr[mid] == target  && arr[mid + 1] == target){
            high = mid + 1
        // check if range accounts for all occurances, if so , return the number of occurances within the range
        } if ((arr[low] == target && arr[low -  1] !=  target) && (arr[high] == target && arr[high 
            + 1] !=  target)) {
                return (high - low + 1)
            }

    }
    return -1;
}

// sortedFrequency([1,1,2,2,2,2,3],2) // 4

// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

module.exports = sortedFrequency