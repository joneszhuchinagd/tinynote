/**
 * Created by Weijie Zhu on 2016/11/25.
 */

'use strict';

exports.parse = function (str, template) {
  let _str = '\n' + template.title + '\n\n' + genTh(template.th);
  const valueReg = new RegExp(`\\s*${template.name}\\s*:{1}\\s*(.*)\\s*`, 'ig');
  const params = [];
  while (true) {
    const valueMatch = extractParams(str, valueReg);
    if (!valueMatch) break;
    params.push(valueMatch);
  }
  for (let param of params) {
    _str += '\n| ';
    for (let cell of param) {
      _str += cell + ' | '
    }
  }
  if (params.length === 0) {
    return '';
  }
  return _str + '\n';
}

/*
 * 生成表头
 * */
function genTh(th) {
  let str = '|';
  let str2 = '\n|';
  for (let _th of th) {
    str += _th + '|';
    str2 += "------|";
  }
  return str + str2;
}

/*
 * 解析出table参数
 * */
function extractParams(str, reg) {
  const match = reg.exec(str);
  if (match && match[1]) {
    return match[1].split(/\s+/);
  }
  return null;
}