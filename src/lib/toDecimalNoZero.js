module.exports = function toDecimalNoZero(x, n) {
    n = typeof n === 'undefined' ? 1 : n;
    var ratio = Math.pow(10, n);
    var f = Math.round(x * ratio) / ratio;
    var s = f.toString();
    return s;
};
