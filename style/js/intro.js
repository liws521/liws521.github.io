// 两种切换, 这里很好改, 可以改成几种仓库轮流更新
var introFlag = 0;
function introduce() {
    var intro = document.getElementById("intro");
    var introText = document.getElementById("introText");
    if (introFlag == 0) {
        introFlag = 1;
        intro.style.height = "100px";
        introText.innerHTML = "内容制作ing<br> 敬请期待";
    } else {
        introFlag = 0;
        intro.style.height = "50px";
        introText.innerHTML = "攀一座山, 看一场雪, 追一个梦~";
    }
}