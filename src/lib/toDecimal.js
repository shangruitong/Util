
module.exports = function toDecimal(x, n) {
    n = typeof n === 'undefined' ? 1 : n;
    var ratio = Math.pow(10, n);
    var f = Math.round(x * ratio) / ratio;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + n) {
        s += '0';
    }
    return s;
};
