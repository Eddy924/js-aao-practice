const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    var oddOnes = [];
    for (var i = 1; i < arr.length; i += 2) {
        oddOnes.push(arr[i]);
    }
    return oddOnes;
}

console.log(oddIndices(indices));

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    var backWardsOdds = [];
    for (var i = arr.length - 1; i >= 0; i -= 2){
        backWardsOdds.push(arr[i]);
    }
    return backWardsOdds;
}

console.log(oddReverse(indices));

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    var powersOfTwo = [];
    for (var i = 2; i < arr.length; i *= 2){
        powersOfTwo.push(arr[i]);
    }
    return powersOfTwo;
}

console.log(secondPower(indices));

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    var powersOfN = [];
    for (var i = n; i < arr.length; i *= n){
        powersOfN.push(arr[i]);
    }
    return powersOfN;
}

console.log(nthPower(indices, 3));

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    var firstHalfOfArray = [];
    for (i = 0;i  < arr.length / 2; i++){
        firstHalfOfArray.push(arr[i]);
    }
    return firstHalfOfArray;
}

console.log(firstHalf(indices))

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Your code here
    var secondHalfOfArray = [];
    for (i = arr.length - 1; i >= arr.length / 2; i--){
        secondHalfOfArray.push(arr[i]);
    }
    return secondHalfOfArray;
}

console.log(secondHalf(indices));

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
