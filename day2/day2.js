// let a = [1,2,3,3,2]

// let b = a.reduce((a,b) => a ^ b , 0)

// console.log(b)

// problem 2   first add diagonal num then minus this and find posetive num

// const arr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ];

// const diagonal1 = [];

// for (let i = 0; i< arr.length; i++){
//     diagonal1.push(arr[i][i])
// }
// console.log(diagonal1)

// const diagonal2 = []

// for (let i = 0; i < arr.length; i++){
//     diagonal2.push(arr[i][arr.length - i - 1])
// }

// console.log(diagonal2)


// let diaadd = diagonal1.reduce((a,b)=> a + b,0)
// console.log(diaadd)

// let diaadd2 = diagonal2.reduce((a,b) => a+b,  0)
// console.log(diaadd2)

// let ans1 = (diaadd - diaadd2)

// let ans = Math.abs(ans1)

// console.log(ans)


// problem 3 

function countingSort(arr) {
    // Step 1: Create a frequency array of size 100 initialized with zeros
    let frequency = new Array(100).fill(0);

    // Step 2: Count occurrences of each number
    for (let num of arr) {
        frequency[num] += 1; // Increase count at the index of the number
    }

    // Step 3: Return the frequency array
    return frequency;
}

// Example Input
const arr = [
    63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
    99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3,
    89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87,
    42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 
    44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33
];

// Run Function
const result = countingSort(arr);

// Output the frequency array
console.log(result.join(" ")); // Output as a single space-separated string




