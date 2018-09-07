module.exports = function toDecimalNoZero(x, n) {
    n = n || 1;
    var ratio = Math.pow(10, n);
    var f = Math.round(x * ratio) / ratio;
    var s = f.toString();
    return s;
};
