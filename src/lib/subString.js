/**
 * 截取指定长度的中英文混合字符串
 * @param {*} str 待截取的字符串
 * @param {*} n 截取长度（中文字符为英文的 double）
 * @return {*} 截取后的字符串
 */
function subString(str, n) {
    var r = /[^\x00-\xff]/g;
    var m;
    if (str.replace(r, '**').length > n) {
        m = Math.floor(n / 2);
        for (var i = m, l = str.length; i < l; i++) {
            if (str.substr(0, i).replace(r, '**').length >= n) {
                str = str.substr(0, i);
                return str;
            }
        }
    }
    return str;
}

module.exports = subString;
