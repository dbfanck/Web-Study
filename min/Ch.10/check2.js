function findMax(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}

let arr = [30, 10, 50];
let max = findMax(arr);

console.log(max);