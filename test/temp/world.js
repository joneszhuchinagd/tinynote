/**
 * Created by Weijie Zhu on 2016/12/7.
 */

'use strict';


/*
 * title : worldApi1
 * url : /api/test/{api}
 * method : get
 * params : id1 path false 测试id1
 * params : id2 path false 测试id2
 * code: 9999 系统错误
 * code: 8888 授权错误
 * return :
 * ```
 * {
 *   hello:'world',
 * }
 * ```
 * */

/*
 * world
 * */
function world() {

  // world 
  return 'world';
}

/*
 * title : worldApi2
 * url : /api/test2/{api}
 * method : get
 * params : id path false 测试id2
 * code : 777 未登录
 * */


/**
 * world
 * @returns {string}
 */
function world() {

  // world
  return 'world';
}


/*
 * title : worldApi3
 * url : /api/test2/{api}
 * method : get
 * params : id path false 测试id2
 * code : 777 未登录
 * return :
 * ```
 * {
 *   hello:'world',
 * }
 * ```
 * */