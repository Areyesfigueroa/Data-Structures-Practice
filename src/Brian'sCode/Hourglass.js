// Complete the hourglassSum function below.
const array = [
    [1, 1, 1, 5, 5, 5],
    [0, 1, 0, 0, 5, 0],
    [1, 1, 1, 5, 5, 5],
    [5, 0, 2, 4, 4, 0],
    [0, 30, 0, 2, 0, 0],
    [4, 19, 1, 2, 4, 0]
];
const array2 = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
];

function hourglassSum(arr) {
    let rowIndex = 0;
    let colIndex = 0;
    let hightestSum = new Number();
    let currentSum = new Number();
    while (colIndex <= 3) {
        for (let col = colIndex; col <= colIndex + 2; col++) { // looping through vertically
            for (let row = rowIndex; row <= rowIndex + 2; row++) { // looping through horizontally
                if (row !== rowIndex + 1 || (col === colIndex + 1 && row === rowIndex + 1)) {
                    // if we are on top or bottom add to current sum ||
                    // we are at middle middle add to current sum
                    currentSum += arr[row][col];
                }
            }
        }
        if (currentSum > hightestSum || rowIndex === 0 && colIndex === 0) {
            hightestSum = currentSum;
        }

        currentSum = new Number();

        if (rowIndex === 3) {
            colIndex++;
            rowIndex = 0;
            // when we get to the fourth iteration of j we reset j and increment i
        } else {
            rowIndex++;
        }
    }

    return hightestSum;
}

console.log(hourglassSum(array));
  //the order of the loop is(these being the top left indexes of the hourglass)
  //[0][0]
  //[0][1]
  //[0][2]
  //[0][3]
  //[1][0]
  //[1][1]
  //[1][2]
  //[1][3]
  //[2][0]
  //[2][1]
  //[2][2]
  //[2][3]
  //[3][0]
  //[3][1]
  //[3][2]
  //[3][3]