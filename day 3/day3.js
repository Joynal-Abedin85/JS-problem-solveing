function findZigZagSequence(arr, n) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor((n - 1) / 2);

    [arr[mid], arr[n - 1]] = [arr[n - 1], arr[mid]];

    let left = mid + 1;
    let right = n - 2;
    while (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    console.log(arr.join(" "));
}

// Test case
let testArray = [1, 2, 3, 4, 5, 6, 7];
findZigZagSequence(testArray, testArray.length);
