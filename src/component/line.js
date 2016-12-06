/**
 * Created by Weijie Zhu on 2016/11/23.
 */

'use strict';

exports.parse = function (str, template) {
  const valueReg = new RegExp(`\\s*${template.name}\\s*:{1}\\s*(.*)\\s*`, 'i');
  const match = valueReg.exec(str);
  if (match) {
    const replaceReg = new RegExp(`\\$\\{text\\}`);
    return '\n' + template.template.replace(replaceReg, match[1]);
  }
  return '';
}



