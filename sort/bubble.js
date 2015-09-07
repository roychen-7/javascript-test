// 先找最大的放到最后，然后在剩下的里面找第二大的，放到倒数第二，依次类推
function bubble (arr) {
    var len = arr.length;
    for (var i = len - 1; i > 0; i--) {
        console.log(i);
        console.log("BEFORE ------");
        console.log(arr);
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var d = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = d;
            }
        } 
        console.log("AFTER ------");
        console.log(arr);
        console.log("=============================");
    }

    return arr;
}

// var arr = [1, 4, 5, 2, 3];
var arr = [5, 4, 3, 2, 1];

bubble(arr);
