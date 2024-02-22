module.exports = function log() {
    var color = "black";
    var size;
    if (arguments[1]) {
        size = arguments[1] + "px";
        if (typeof arguments[1] !== 'number') {
            throw 'second parameter should be an int';
        }
    }
    if (arguments[2]) {
        color = arguments[2];
        if (typeof arguments[2] !== 'string') {
            throw 'third parameter should be string';
        }
    }
    if (arguments.length > 3) {
        throw 'Arguments length should not be bigger than 3';
    }
    console.log("%c" + arguments[0], "color: " + color + "; font-size:" + size);
};