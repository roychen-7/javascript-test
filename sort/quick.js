function quickSort(arr) {
    if (arr.length <= 1) { return arr; }

    var key = arr[0];
    var thisKeyArr = [];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < key) {
            left.push(arr[i]);
        } else if (arr[i] > key) {
            right.push(arr[i]);
        } else {
            thisKeyArr.push(key);
        } 
    }
    return quickSort(left).concat(thisKeyArr, quickSort(right));
}

var arr = [4, 2, 5, 1, 3, 4, 5, 6];
// var arr = [2, 3];

console.log(quickSort(arr));
