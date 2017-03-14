# JSON 模板检测器

##  简介
检查 P4 项目中的 JSON 是否符合模板，效果如下：




## 使用方法 1
1. 将文件 `nameChecker.js` 和要测试的文件放在同一目录下
2. 在 HTML 文件里添加下面代码，并把路径换为 `resumeBuilder.js` 的路径
```html
<script src=“文件路径”></script>
```

3. 刷新网页，打开 `Chrome 的 Console` 就能看到结果了

## 使用方法 2

1. 下载项目
2. 在项目的位置，利用终端 `terminal`  打入命令 `pwd` 获取文件的路径
```
$pwd
```
3. 在 HTML 文件里添加下面代码，并将第 2 步获取到的路径加上文件名 `nameChecker.js` 去替换下面的文件路径
```html
<script src=“文件路径”></script>
 ```
4. 刷新网页，打开 `Chrome 的 Console` 就能看到结果了

## 以后必须改善的点
- 文档的描述和写法，。。写文档的技巧还必须必须提高啊 : (
- 最好能够做成网页版的，相信会方便不少。类似于检查 HTML 和 CSS 格式那样 
