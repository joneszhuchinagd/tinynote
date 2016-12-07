/**
 * Created by Weijie Zhu on 2016/11/22.
 */

'use strict';
const glob = require("glob");
const path = require('path');
const fs = require('fs');
const utils = require('./utils');
const fsex = require('fs-extra');

const component = {
  Line: require('./component/line'),
  Table: require('./component/table'),
  Code: require('./component/code')
}

const template = [
  {
    type: 'Line',
    name: 'title',
    template: '## ${text}'
  },
  {
    type: 'Line',
    name: 'url',
    template: '* 地址 : ${text}'
  },
  {
    type: 'Line',
    name: 'method',
    template: '* 方法 : ${text}'
  },
  {
    type: 'Table',
    name: 'params',
    title: '* 参数 :',
    th: ['参数名', '类型', '必填', '说明']
  },
  {
    type: 'Table',
    name: 'code',
    title: '* 返回码 :',
    th: ['返回码', '说明']
  },
  {
    type: 'Code',
    name: 'return',
    title: '* 返回值 :'
  }
]

/*
 * 读取文件内容
 * */
function readFiles(paths) {
  const files = {};
  for (let filepath of paths) {
    const parsePath = path.parse(filepath);
    files[parsePath.name] = fs.readFileSync(filepath, {encoding: 'utf8'});
  }
  return files;
}

/*
 * 提取整块注释数组,，默认忽略没有title字段的注释
 * */
function extractNote(files) {
  const notes = [];
  for (let key in files) {
    const noteReg = /\/\*[\s\S]*?\*\//ig;
    const titleReg = /\s*title\s*:{1}\s*.*\s*/i;
    let match;
    do {
      match = noteReg.exec(files[key]);
      if (match && match[0] && titleReg.test(match[0])) {
        notes.push(match[0]);
      }
    } while (match)
  }
  return notes;
}


/*
 * 生成文档列表
 * */
function generateList(notes) {
  let list = '\n|方法|地址|\n|------|------|';
  const titleReg = /\s*title\s*:{1}\s*(.*)\s*/i;
  const urlReg = /\s*url\s*:{1}\s*(.*)\s*/i;
  for (let note of notes) {
    const titleMatch = titleReg.exec(note);
    const urlMatch = urlReg.exec(note);

    list += `\n| [${titleMatch[1]}](#${titleMatch[1]}) | ${urlMatch[1]} |`;
  }
  list += '\n';
  return list;
}

/*
 * 生成Api内容
 * */
function generateApi(notes, template) {
  let api = '\n';
  for (let note of notes) {
    for (let t of template) {
      api += component[t.type].parse(note, t);
    }
  }
  api += '\n';
  return api;
}

module.exports = function (config) {
  let data = '';
  const sources = glob.sync(config.source, {nodir: true});
  if (sources.length === 0) return console.log(`'${config.source}'目录下未发现有效文件。`);
  const files = readFiles(sources);
  const notes = extractNote(files);
  data += generateList(notes);
  data += generateApi(notes, template);
  fsex.mkdirsSync(path.resolve(process.cwd(), path.dirname(config.dist)));
  fs.writeFileSync(path.resolve(config.dist), data);
}