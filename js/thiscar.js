window.onload = function () {
    //메뉴 변수 선언
    const menuList = document.querySelectorAll("section")
    const menuBtn = document.querySelectorAll(".category>li")

    //볓번째 리스트인지 체크할 변수
    let showList = 0;

    for (i = 0; i < menuList.length; i++) {
        menuList[i].classList.add("on");
    }
    menuBtn.forEach((n, id) => {
        menuBtn[id].addEventListener("click", function (e) {
            console.log(menuBtn);
            showList = id;
            clickBtn(e);
        })
    })
    function clickBtn(e) {
        e.preventDefault();
        if (showList == 0) {
            for (i = 0; i < menuList.length; i++) {
                menuList[i].classList.add("on");
            }
        } else {
            for (i = 0; i < menuList.length; i++) {
                menuList[i].classList.remove("on");
            }
            menuList[showList - 1].classList.add("on");
        }
    }
}