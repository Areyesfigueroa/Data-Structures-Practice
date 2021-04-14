
const array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const array2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];
//1, 4, 9, 16
//O(n) = row ^ col * col
// O(n) = constant
// Bring up to slack. Big O for this algo.
const hourglass = arr => {
  let maxSum = null;
  for(let row = 0; row < arr.length - 2; row++) {  //reduce the amount of rows needed to be searched through. 
    for(let col = 0; col < arr[0].length; col++) {
      if( (col !== 0) && (col !== arr[0].length - 1) ) { //do not worry about the start and finish col.
        
        let sum = 0;
        sum += arr[row][col - 1] + arr[row][col] + arr[row][col + 1]; //top three
        sum += arr[row + 1][col]; //Middle point
        sum += arr[row + 2][col - 1] + arr[row + 2][col] + arr[row + 2][col + 1]; //bottom three
        
        if(maxSum === null) { 
          maxSum = sum;
        } else if(sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }
  
  return maxSum;
};

console.log(hourglass(array2));