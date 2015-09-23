function wCount(str) {
    var count = {};
    str.split('').map(function (w) {
        if (w === ' ') { return; }

        if (count[w]) {
            count[w]++;
        } else {
            count[w] = 1;
        }
    });

    return count;
}

console.log(wCount('hello world'));
