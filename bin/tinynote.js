#!/usr/bin/env node

/**
 * Created by Weijie Zhu on 2016/11/22.
 */

'use strict';
const gen = require('../src/gen');
const argv = require('../src/args')(process.argv.slice(2));

if (argv.hasOwnProperty('help')) {
  console.log('help');
  process.exit(0);
} else {
  try {
    gen(argv)
  }
  catch (e) {
    console.log(e.stack);
    process.exit(0);
  }
}


