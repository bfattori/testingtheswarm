var Test = function() {
    this.bar = "bar";
};

Test.prototype.foo = function() {
    return 'foo';
};

Test.prototype.failsInFirefox = function() {
    return !/firefox/.test(navigator.userAgent.toLowerCase());
};