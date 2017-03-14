# JSON 模板检测器

##  简介
检查 P4 项目中的 JSON 是否符合模板，效果如下：

![效果图](https://github.com/PoBlue/JsonPatternChecker/blob/master/屏幕快照%202017-03-14%20下午5.21.39.png)

## 使用方法 1
首先，将文件 `nameChecker.js` 和要测试的文件放在同一目录下

然后在 HTML 文件里添加下面代码，并把路径换为 `resumeBuilder.js` 的路径
```html
<script src=“文件路径”></script>
```
最后刷新网页，打开 `Chrome 的 Console` 就能看到结果了

## 使用方法2: 使用终端命令

首先，利用命令 `git clone` 下载项目

然后利用命令 cd ，进入到项目，打入命令 `pwd` 获取文件的路径
```
$pwd
```
再然后，在 HTML 文件里添加下面代码，并将第 2 步获取到的路径加上文件名 `nameChecker.js` 去替换下面的文件路径
```html
<script src=“文件路径”></script>
 ```
最后刷新网页，打开 `Chrome 的 Console` 就能看到结果了

## 以后会改善的点
- 提高一下文档的描述和写法
- 最好能够做成网页版的，相信会方便不少。类似于 [HTML格式检查器](https://validator.w3.org/) 或者 [CSS 格式检查器](http://csslint.net/#results) 那样 
