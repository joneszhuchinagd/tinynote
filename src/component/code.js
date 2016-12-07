/**
 * Created by Weijie Zhu on 2016/12/7.
 * reg : /\s*return\s*:{1}[\s\S]*?```([\s\S]*?)\s*.*```/m
 */

'use strict';

exports.parse = function (str, template) {
  let _str = '\n' + template.title;
  const valueReg = new RegExp('\\s*' + template.name + '\\s*:{1}[\\s\\S]*?```([\\s\\S]*?)\\s*.*```', 'm');
  const valueMatch = valueReg.exec(str);
  if (!valueMatch) {
    return '';
  } else {
    const starReg = /^\s*\**/mg;
    _str += '\n```\n' + valueMatch[1].replace(starReg, '') + '\n```\n';
  }
  return _str;
}