var hehe = {
    a: 1,
    b: 2
}

function sa() {
    console.log(this.a);
}

var sA = sa.bind(hehe);
sA();
