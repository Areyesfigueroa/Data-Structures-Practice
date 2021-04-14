// Create a 2-dimensional array, , of n empty arrays. All arrays are zero indexed.

const dynamicArray = (n, queries) => {
    
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.push([]);
    }
    
    let lastAnswer = 0;
    let correctQueries = [];

    for(let q of queries) {
        const type = q[0];
        const x = q[1];
        const y = q[2];

        let idx = ((x ^ lastAnswer) % n);

        //Query type 1 only:
        if(type === 1) {
            arr[idx].push(y);
        } else {
            //Query type 2 only:
            const size = arr[idx].length;
            lastAnswer = arr[idx][y % size];
            correctQueries.push(lastAnswer);

            console.log(lastAnswer);
        }
    }

    return correctQueries;
}

const queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
]

console.log(dynamicArray(2, queries));

// There are 2 types of queries:

// Query: 1 x y
// Find the list within arr at index = ((x ^ lastAnswer)).

// const idx = ((x ^ lastAnswer) % n)
// arr[]

// Append the integer  to the .