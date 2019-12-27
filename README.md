# ido-imageloader
一个实现图片预加载（preload）与懒加载（lazyloaad）的javascript库。

## 集成



```shell
npm install ido-image-loader
```

## 使用

### 1、lazyload懒加载使用

1. 将图片src替换为data-src，src上放置placeholder占位图

   ```html
    <img
        src="./img/loading.gif"
        data-src="./img/ml.png"
        alt=""
        />
   ```

2. 给图片添加lazyload-img的类名

   ```html
    <img
        src="./img/loading.gif"
        data-src="./img/ml.png"
    	 class="lazyload-img"
        alt=""
        />
   ```

3. 调用js方法

   ```javascript
   var IdoLoader = new IdoImageLoader();
   IdoLoader.lazyload()
   ```

   如果需要自定义class（lazyload-img）类名，或者懒加载时长

   ```javascript
   var IdoLoader = new IdoImageLoader();
   IdoLoader.lazyload(500,'my-lazyimg-class')
   ```

##### 懒加载API

| 名称     | 参数                                                         | 说明               |
| -------- | ------------------------------------------------------------ | ------------------ |
| lazyload | 参数1：time,懒加载时间， 默认200ms； 参数2： className: 需要懒加载图片img标签类名，默认lazyload-img | 参数不传即为默认。 |



### 2、preload预加载使用示例

1. 准备预加载图片的列表

   ```javascript
   var imglist = ['a.png','b.png','c.png’]
   ```

2. 调用方法加载图片

   ```javascript
   var IdoLoader = new IdoImageLoader();
   IdoLoader.preload(imglist);
   ```

   

另外所有图片加载完毕也可以设置回调方法， 和设置图片加载的超时时间。

```javascript
var IdoLoader = new IdoImageLoader();
var callback = function(success){
    if(success) {
        console.log("全部图片加载完毕")
    } else {
        console.log("未加载完毕全部图片")
    }
}
/**
  * 预加载图片函数
  * @param images 加载的图片数组或对象
  * @param callback 全部图片加载完毕后调用的回调函数
  * @param timeout 加载超时的时长
  */
IdoLoader.preload(imglist, callbak, 1000);
```

##### 预加载API

| 名称    | 参数                                                         | 说明 |
| ------- | ------------------------------------------------------------ | ---- |
| preload | imglist：预加载的图片列表；callback：预加载完成的回调；1000：超时时间 |      |

## 变更记录

1.0.0

- Initial】初始版本