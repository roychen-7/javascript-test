function search(x, data) {
    // 只有一个数组对象时，在这个数组对象里面查找
    if (data.length === 1) {
        return getInArr(x, data[0]);
    }

    // 二分
    var halfLength = parseInt(data.length / 2);
    var preArr = data.slice(0, halfLength);
    var suffixArr = data.slice(halfLength, data.length);
    
    // 跟Pre的最大值做比较，判断该进入那个分支
    if (x < preArr[halfLength - 1][preArr[halfLength - 1].length - 1]) {
        return search(x, preArr);
    } else if (x > preArr[halfLength - 1][preArr[halfLength - 1].length - 1]) {
        return search(x, suffixArr);
    } else {
        return true;
    }
}

// 思路和search几乎一致
function getInArr(x, arr) {
    if (arr.length === 1) {
        return arr[0] === x;
    }
    
    var halfLength = parseInt(arr.length / 2); 
    var pre = arr.slice(0, halfLength);
    var suffix = arr.slice(halfLength, arr.length);

    if (x < pre[halfLength - 1]) {
        return getInArr(x, pre);
    } else if (x > pre[halfLength - 1]) {
        return getInArr(x, suffix);
    } else {
        return true;
    }
}

var arr = [
    [2,   4,  8,  9],
    [10, 13, 15, 21],
    [23, 25, 29, 30]
];

for (var i = 0; i < 35; i++) {
    if (search(i, arr)) {
        console.log(i);
    }
}
