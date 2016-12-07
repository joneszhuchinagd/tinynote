# tinynote

------

一个非常简单的API文档生成工具

## Installation

```
npm install tinynote -g
```

## Usage

```
tinynote -source 'text/temp/*.js' -dist 'test/echo/api.md'

```

* source 注释文件的源路径，支持glob
* dist 生成路径


## Demo

```
/*
 * title : API
 * url : /api/test
 * method : get
 * params : name path false 用户名
 * params : sex path false 性别
 * code: 9000 系统错误
 * code: 8000 授权错误
 * return :
 * ` `` <-------这三个点和markdown的语法有冲突，写文档的时候只能故意空了一格。
 * {
 *   hello:'world',
 * }
 * ` ``
 * */
```

## Output

------

|方法|地址|
|------|------|
| [API](#API) | /api/test |


## API
* 地址 : /api/test
* 方法 : get
* 参数 :

|参数名|类型|必填|说明|
|------|------|------|------|
| name | path | false | 用户名 |
| sex | path | false | 性别 |

* 返回码 :

|返回码|说明|
|------|------|
| 9000 | 系统错误 |
| 8000 | 授权错误 |

* 返回值 :
```
 {
   hello:'world',
 }
```

