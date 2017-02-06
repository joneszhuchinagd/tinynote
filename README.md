# tinynote

------

一个非常简单的API文档生成工具。

通过在路由文件中写入相应的注释，从而可以自动生成和维护简单的API文档。

## Installation

```
npm install tinynote -g
```

## Cmd

```
// mac系统
tinynote -source 'text/temp/*.js' -dist 'test/echo/api.md'

// windows系统
tinynote -source text/temp/*.js -dist test/echo/api.md
```

* source 注释文件的源路径，支持glob
* dist 生成路径

## Configuration
也支持在package.json里面进行配置
```
"tinynote": {
    "dist": "test/echo/api.md",
    "source": "test/temp/*.js",
    "template": [
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
        "th": [
          "参数名",
          "类型",
          "必填",
          "说明"
        ]
      },
      {
        "type": "Table",
        "name": "code",
        "title": "#### 返回码 :",
        "th": [
          "返回码",
          "说明"
        ]
      },
      {
        "type": "Code",
        "name": "return",
        "title": "#### 返回值 :"
      }
    ]
  }
```

## Usage

```
/*
 * title : 路由1
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
| [路由1](#路由1) | /api/test |

## 路由1
#### 地址 : /api/test
#### 方法 : get
#### 参数 :

|参数名|类型|必填|说明|
|------|------|------|------|
| name | path | false | 用户名 |
| sex | path | false | 性别 |

#### 返回码 :

|返回码|说明|
|------|------|
| 9000 | 系统错误 |
| 8000 | 授权错误 |

#### 返回值 :
```
 {
   hello:'world',
 }
```
