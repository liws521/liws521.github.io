// 计算鼠标位置相对屏幕中点的位置, 把屏幕分为40*40的相对值, 保留一位小数
var range = 40;
function calcValue(a, b) {
    return (a / b * range - range / 2).toFixed(1);
}

var bg = document.getElementById("bg");
// bg2是bg1的模糊版本, z-index比bg高, 通过鼠标的y来调整不透明度, 来达到显示模糊的效果
var bg2 = document.getElementById("bg2");
// 立绘初始化left=-100px, 根据mousemove时的鼠标与窗口相对位置对left进行微调
// 幅度为40 * 0.7 = 28px
var lihui = document.getElementById("lihui");
var yinghua = document.getElementById("yinghua");

document.addEventListener('mousemove',
    function (ev) {
        // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
        // 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
        // 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
        window.requestAnimationFrame(function () {
            var xValue = calcValue(ev.clientX, window.innerWidth);
            var yValue = calcValue(ev.clientY, window.innerHeight);
            bg.style.backgroundPositionX = xValue * 1 - 50 + "px ";
            bg.style.backgroundPositionY = (-yValue * 0.75 - 50) + "px";
            bg2.style.backgroundPositionX = xValue * 1 - 50 + "px ";
            bg2.style.backgroundPositionY = (-yValue * 0.75 - 50) + "px";
            bg2.style.opacity = 1 - (ev.clientY / window.innerHeight * 2);
            lihui.style.left = xValue * 5 - 100 + "px";
            yinghua.style.backgroundPositionX = xValue * 1.5 - 50 + "px ";
            yinghua.style.backgroundPositionY = (-yValue * 1 - 50) + "px";
        })
    }, false);