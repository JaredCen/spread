#Spread.js

>基于移动设备的原点扩散交互特效

**插件只针对移动设备，因此demo需要在chrome**
-[Website](http://1.junreycen.applinzi.com/spread-effects/html/demo.html)



###引用文件目录

目前版本基于手淘移动端适配方案flexible.js，后续会重构不依赖任何库；
同时，因为是基于移动设备，建议使用normalize.css初始化浏览器样式；
```
scripts/
├── flexible.js
└── spread.js

less/
└── demo.less
```


###引入插件库

```
<script src="/path/to/flexible.js"></script>
<link rel="stylesheet" href="/path/to/demo.css">
<script src="/path/to/spread.js"></script>
```


###插件使用

HTML:
```
<section id="container">
    <!-- 被覆盖在下层的图片 -->
    <img class="img-blow" src="../image/female-cover.png" alt="img-blow">

    <!-- 覆盖在顶层的图片 -->
    <div id="img-cover">
        <img id="img-self" src="../image/male-cover.png" alt="img-cover">
    </div>
</section>
```

Javascript:
```
var spread = new Spread({

    // 覆盖在下层图片的宽度，单位：rem
    'imgWidth': 8,

    // 覆盖在下层图片的长宽比
    'imgRatio': 550/306,

    // 圆覆盖层的最终transform宽度，单位：rem
    'cycleFinalWidth': 15,

    // 最外层container的top（or margin-top）值，单位：rem
    'containerTop': 0,

    // 最外层container的left（or margin-left）值，单位：rem
    'containerLeft': 1,

    // transition持续时间，单位：s
    'time': 1,

    // 圆覆盖层div的id
    'cover': 'img-cover',

    // 覆盖在下层图片的id
    'below': 'img-self',

    // 最外层元素id
    'container': 'container',

    // 收缩事件触发按钮id
    'reset': 'reset'
});     
spread.Run();
```

less:
```
// 图片宽度
@img-width: 8rem;
// 图片长宽比
@img-ratio: 550/306;
```

### Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 8+

### License
[MIT](http://opensource.org/licenses/MIT) © [JunreyCen](http://junreycen.github.io/)