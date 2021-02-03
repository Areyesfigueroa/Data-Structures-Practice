

const leftRotation = (d, array) => {
    let shiftedArr = array.concat();
    for(let i = 0; i < d; i++) {
        let shiftValue = shiftedArr.shift();
        shiftedArr.push(shiftValue);
    }
    return shiftedArr;
}


const array = [1, 2, 3, 4, 5];
const shiftBy = 4;

console.log(leftRotation(shiftBy, array));