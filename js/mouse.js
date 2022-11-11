$(function () {
    //마우스휠 이벤트는 파라미터 2개 받아서 처리
    //첫번째 파라미터 : 이벤트객체
    //e.originalEvent.wheelDelta : 마우스의 움직임을 감지
    //                 d<0: 마우스휠을 내림(-120)
    //                 d>0: 마우스휠을 올림(120)
    $('section').on('mousewheel', function (e) {
        e.preventDefault(); //기본 이벤트 실행을 방지 : scroll발생 방지
        let d = e.originalEvent.wheelDelta;
        console.log(d);
        if (d > 0) { //마우스휠을 올렸을 경우
            try {
                let prev = $(this).prev().offset().top;
                $('html, body').stop().animate({ scrollTop: prev }, 500);
            } catch (e) {
                return false;
            }
        } else { //마우스휠을 내렸을 경우
            try {
                let next = $(this).next().offset().top;
                if (next == 0) {
                    return true;
                }
                $('html, body').stop().animate({ scrollTop: next }, 500);
            } catch (e) {
                return true;
            }
        }
    });
});