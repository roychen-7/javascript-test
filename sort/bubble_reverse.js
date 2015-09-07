function bubbleReverse (arr) {
    var len = arr.length;
    for (var i = len - 1; i > 0; i--) {
        console.log(i);
        console.log(arr);
        for (var j = 0; j < i; j++) {
            if (arr[j] < arr[j + 1]) {
                var d = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = d;
            }
        } 
        console.log(arr);
        console.log("=========");
    }
    /*
    var len = arr.length;
    for (var i = len - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var d = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = d;
            }
        } 
    }
    */

    return arr;
}

var arr = [1, 4, 5, 2, 3];
// var arr = [1, 2, 3, 4, 5];

console.log(bubbleReverse(arr));
