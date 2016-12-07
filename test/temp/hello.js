/**
 * Created by Weijie Zhu on 2016/11/23.
 */

'use strict';


/*
 * title : API
 * url : /api/test
 * method : get
 * params : name path false 用户名
 * params : sex path false 性别
 * code: 9000 系统错误
 * code: 8000 授权错误
 * return :
 * ```
 * {
 *   hello:'world',
 * }
 * ```
 * */

/*
 * hello
 * */
function hello() {

  // hello
  return 'hello';
}


/*
 * title : helloApi2
 * url : /api/test2/{api}
 * method : get
 * params : id path false 测试id2
 * code : 777 未登录
 * */

/**
 * hello
 * @returns {string}
 */
function hello() {

  // hello
  return 'hello';
}