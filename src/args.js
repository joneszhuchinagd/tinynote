/**
 * Created by Weijie Zhu on 2016/11/22.
 */

'use strict';
const fs = require('fs');
const path = require('path');
const ARGV = ['help', 'dist', 'source'];
const defaultArgv = {
  dist: './API.md',
  source: './router/*.js',
  template: [
    {
      "type": "Line",
      "name": "title",
      "template": "## ${text}"
    },
    {
      "type": "Line",
      "name": "url",
      "template": "#### 地址 : ${text}"
    },
    {
      "type": "Line",
      "name": "method",
      "template": "#### 方法 : ${text}"
    },
    {
      "type": "Table",
      "name": "params",
      "title": "#### 参数 :",
      "th": ["参数名", "类型", "必填", "说明"]
    },
    {
      "type": "Table",
      "name": "code",
      "title": "#### 返回码 :",
      "th": ["返回码", "说明"]
    },
    {
      "type": "Code",
      "name": "return",
      "title": "#### 返回值 :"
    }
  ]
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
  let packageJson = null;
  try {
    const packageFile = fs.readFileSync(path.resolve(process.cwd(), 'package.json'));
    packageJson = JSON.parse(packageFile.toString());
    if (packageJson.tinynote) {
      Object.assign(defaultArgv, packageJson.tinynote);
    }
  } catch (e) {
    if (e.code !== 'ENOENT') {
      console.log(e)
    }
  }
  return Object.assign(defaultArgv, extract);
}

module.exports = extractArgv;