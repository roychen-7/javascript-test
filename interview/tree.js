var tree = {
    left: {
        left: {
            left: {},
            right: {},
            depth: 2
        },
        right: {
            left: {},
            right: {},
            depth: 2
        },
        depth: 1
    },
    right: {
        left: {
            left: {},
            right: {},
            depth: 2
        },
        right: {
            left: {
                left: {},
                right: {},
                depth: 3
            },
            right: {
                left: {},
                right: {},
                depth: 3
            },
            depth: 2
        },
        depth: 1
    },
    depth: 0
}

var widthObj = [];

function traverseWidth(tree) {
    if (!tree.left && !tree.right) {
        return;
    }

    if (tree.left.length !== 0) {
        traverseWidth(tree.left);
    } 
    
    if (tree.right.length !== 0) {
        traverseWidth(tree.right);
    }
        
    if (!widthObj[tree.depth]) {
        widthObj[tree.depth] = 1
    } else {
        widthObj[tree.depth]++;
    }
}

traverseWidth(tree);
console.log(widthObj);

var max = widthObj[0];

for (var i = 0; i < widthObj.length; i++) {
    if (max < widthObj[i]) { max = widthObj[i]; }
}

console.log(max);
