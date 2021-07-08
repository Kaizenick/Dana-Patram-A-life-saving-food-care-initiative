
var sys = require("util");
setTimeout(function () {
    console.log("The timing value will be shown");
}, 3000);
console.log("call function");

exports.add = function (a, b) {
    console.log("Add:", a + b);
    return (a + b);
}
exports.sub = function (a, b) {
    console.log("Sub:", a - b);
    return (a - b);
}
exports.mul = function (a, b) {
    console.log("Mul:", a * b);
    return (a * b);
}
exports.div = function (a, b) {
    if (b != 0) {
        console.log("Div:", a / b);
        return (a / b);
    }
    else {
        console.log("Division by Zero error");
        return 0;
    }
}
exports.rem = function (a, b) {
    if (b != 0) {
        console.log("Rem:", a % b);
        return (a % b);
    }
    else {
        console.log("Division by Zero error");
        return 0;
    }
}
exports.incr = function (a) {
    console.log("Incr:", a++);
    return (a++);
}
exports.decr = function (a) {
    console.log("Decr:", a--);
    return (a--);
}
exports.expo = function (a, b) {
    console.log("Expo:", a ** b);
    return (a ** b);
}

