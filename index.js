/* 이미지 캐싱 */
function imageCache () {
    $('.no-cache').attr('src',function () { return $(this).attr('src') + "?a=" + Math.random() });
}

/* 백그라운드 캐싱 */
function bgCache () {
    var bgEle1 = 'url(../web/ifw/main/slider01.png' + "?a=" + Math.random() + ') 0 0 no-repeat'
    var bgEle2 = 'url(../web/ifw/main/slider02.png' + "?a=" + Math.random() + ') 0 0 no-repeat'
    var bgEle3 = 'url(../web/ifw/main/slider03.png' + "?a=" + Math.random() + ') 0 0 no-repeat'

    $('.bg-cache-01').css({
        'background' : bgEle1
    });
    $('.bg-cache-02').css({
        'background' : bgEle2
    });
    $('.bg-cache-03').css({
        'background' : bgEle3
    });
}
