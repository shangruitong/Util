var getCookie = function (name) {
    var arr;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
};

module.exports = getCookie;
