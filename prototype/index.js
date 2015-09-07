var test = function() {}

test.say = function() {
    console.log(this.id);
}

t = {
    id: 2
};
t.test = test;
t.test.id = 1;
t.test.say();
