var util = {};

// 精确到小数点n位
util.toDecimal = require('./lib/toDecimal.js');

// 精确到小数点n位，不需要额外的末尾的0
util.toDecimalNoZero = require('./lib/toDecimalNoZero.js');

// 截取指定长度的中英文字符串，中文算2个长度
util.subString = require('./lib/subString.js');

module.exports = util;
