function search(x, target) {
    // 直接通过对象hash来判断是不是有这个值
    return target[x] !== undefined;
}

function genTarget(data) {
    var res = {};

    // 两次循环将data扁平化
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            res[data[i][j]] = data[i][j];
        }
    }
    
    return res;
}

var arr = [
    [2,   4,  8,  9],
    [10, 13, 15, 21],
    [23, 25, 29, 30]
];

// 每当arr变化时，重新生成target，由于读多写少，这部分的消耗比较小
// 在这个测试环境下很难做到，但是如果是nodejs或者前端的话，都可以将这个target目标持久化住
var target = genTarget(arr);

for (var i = 0; i < 35; i++) {
    if (search(i, target)) {
        console.log(i);
    }
}
