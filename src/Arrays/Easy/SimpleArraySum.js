const simpleArrSum = (arr) => {
    const arraySum = arr.reduce((accum, currValue) => {
        return accum + currValue;
    });

    return arraySum;
}
const array = [1, 2, 3, 4, 10, 11]; //31
console.log(simpleArrSum(array));