/**
 * Created by Weijie Zhu on 2016/11/23.
 */

'use strict';


/**
 * 判断数据类型
 */
const _typeof = (function () {
  const type = {};
  'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach(function (e) {
    type['[object ' + e + ']'] = e.toLowerCase();
  });
  return function (obj) {
    if (obj === null || obj === undefined) {
      return String(obj);
    }
    return typeof obj === 'object' || typeof obj === 'function' ? type[type.toString.call(obj)] || 'object' : typeof obj;
  };
})();


/**
 * 判断对象属性是否为空
 * @param obj
 * @returns {boolean}
 */
const isEmptyObject = function (obj) {
  if (_typeof(obj) !== 'object') throw new Error('isEmptyObject: obj must be an Object');
  for (const _key in obj) {
    return false;
  }
  return true;
};

module.exports = {_typeof, isEmptyObject};