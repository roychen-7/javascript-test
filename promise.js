var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
       // resolve(); 
       reject('failure');
    }, 2000);
}).then(function() {
    console.log('success');
}, function(err) {
    console.log(err);
});
