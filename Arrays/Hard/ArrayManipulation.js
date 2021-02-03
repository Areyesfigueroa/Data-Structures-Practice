//1-indexed array of zeros. 
//List of operations.
//for each operation add a value to each of the array element between two given indices.
//Run all operations and return maximum value in the array. 

// n=10
// queries = [
//      a  b  k
//     [1, 5, 3],
//     [4, 8, 7],
//     [6, 9, 1]
// ]

// a = queries[row][0]
// b = queries[row][1]
// k = queries[row][2]

// //Iterations

//  1  2  3  4  5  6  7  8  9  10 = n
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //First iterations. All are zeros lenght of n.
// [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] //a=1, b=5, k=3. From 1 to 5 add 3
//          0  1  2  3  4  5  6  7  8  9
// array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //First iteration
// array = [0 + 3=3, 0+3=3, 0+3=3, 0+3=3, 0+3=3, 0, 0, 0, 0, 0] //Second iteration
// array = []

//O(n) = n + q*n
const arrayManipulation = (n, queries) => {
    //initialize array.
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(0);
    }

    //Go through each query
    for(let qIdx = 0; qIdx < queries.length; qIdx++) {
        let a = queries[qIdx][0];
        let b = queries[qIdx][1];
        let k = queries[qIdx][2];

        //Perform operations
        for(let i = 0; i < array.length; i++) {
            if(i + 1 >= a && i + 1 <= b) {
                array[i] = array[i] + k;
            }
        }
    }

    //Get max value of array.
    return Math.max(...array);
}

const arrayManipulation2 = (n, queries) => {
    let maxValue = null;
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(0);
    }

    for(let i = 0; i < queries.length; i++) {
        let start = queries[i][0] - 1;
        let end = queries[i][1] - 1;
        let add = queries[i][2];

        result[start] += add;

        if(end + 1 < n) {
            result[end + 1] -= add;
        }
    }

    for(let i = 1; i < n; i++) {
        result[i] += result[i - 1];
        if(!maxValue || maxValue < Math.max(...result)) {
            maxValue = Math.max(...result);
        }
    }
    return maxValue;
}

//               1,2,3, 4, 5,6,7,8,9,10
// [1, 5, 3] -> [3,3,3, 3, 3,0,0,0,0, 0]
// [4, 8, 7] -> [3,3,3,10,10,7,7,7,0, 0]
// [6, 9, 1] -> [3,3,3,10,10,8,8,8,1, 0]

const queries1 = [
//  a  b  k
   [1, 5, 3],
   [4, 8, 7],
   [6, 9, 1]
];

const queries2 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
];

// console.log(arrayManipulation(10, queries2));
console.log(arrayManipulation2(5, queries2));