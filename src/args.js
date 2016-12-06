/**
 * Created by Weijie Zhu on 2016/11/22.
 */

'use strict';
const ARGV = ['help', 'dist', 'source'];
const defaultArgv = {
  dist: './API.md',
  source: './router/*.js'
}

/*
 * 提取命令行参数
 * */
function extractArgv(argv) {
  const extract = {};
  let i = 0;
  while (i < argv.length) {
    const key = argv[i].replace(/^-*/, '');
    if (ARGV.indexOf(key) === -1) {
      console.log(`不允许的参数:${argv[i]}`);
      process.exit(1);
    }
    extract[key] = argv[i + 1];
    i += 2;
  }
  return Object.assign(defaultArgv, extract);
}

module.exports = extractArgv;