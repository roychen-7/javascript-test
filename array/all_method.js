Object.getOwnPropertyNames(Array.prototype).forEach(function(prop) {
    if (Array.prototype[prop]
     && typeof Array.prototype[prop] === 'function') {
        console.log(prop);
    }
})
