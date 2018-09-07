var util = {};

// 精确到小数点n位
util.toDecimal = require('./lib/toDecimal.js');

// 精确到小数点n位，不需要额外的末尾的0
util.toDecimalNoZero = require('./lib/toDecimalNoZero.js');

module.exports = util;
