!function() {
    let speed= 30
    let pre = document.getElementById('pre')
    let css = document.getElementById('painting-css')
    let code = document.getElementById('code')
    let cssCode = `/*今天来画个蝙蝠侠logo吧！*/

#batman {
    position:absolute;
    left:75%;
    top:50%;
    margin:-100px 0px 0px -175px;
    width:350px;
    height:200px;
    background-color:#111;
    border-radius: 175px / 100px;
}

.inner-y {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -87px 0px 0px -160px;
    width: 320px;
    height: 174px;
    background-color: #edc233;
    border-radius: 195px / 106px;
    overflow:hidden;
}

.inner-b {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -75px 0px 0px -148px;
    width: 296px;
    height: 150px;
    background-color: #111;
    border-radius: 205px / 106px;
}

.cut-lr, .cut-rr {
    position: absolute;
    width: 54px;
    height: 54px;
    border-radius: 500px;
    background-color: #edc233;
    top: 32px;
    margin: -27px 0px 0px -27px;
}

.cut-bll, .cut-brr {
    position: absolute;
    width: 78px;
    height: 44px;
    border-radius: 205px / 106px;
    background-color: #edc233;
    bottom:-2px;
}

.cut-lr {
    left:102px;
}

.cut-rr {
    left:192px;
}

.cut-bll {
    transform:rotate(45deg);
    left:42px;
}

.cut-brr {
    transform:rotate(-45deg);
    right:42px;
}

.cut-blll, .cut-bllr, .cut-brll, .cut-brlr {
    position: absolute;
    width: 70px;
    height: 32px;
    border-radius: 205px / 106px;
    background-color: #edc233;
    bottom: 1px;
}

.cut-blll, .cut-brll {
    transform:rotate(-112deg);
}

.cut-blll {
    right:72px;
}

.cut-brll {
    left:93px;
}

.cut-brlr {
    left:72px;
}

.cut-bllr {
    right:93px;
}

.cut-brlr, .cut-bllr {
    transform:rotate(-67deg);
}

.cut-hd {
    width: 110px;
    height: 34px;
    background: #edc233;
    left: 92px;
    top:-2px;
    position: absolute;
}

.drw-hd-m {
    position: absolute;
    width: 36px;
    height: 56px;
    background-color: #111;
    left: 50%;
    margin-left: -19px;
    border-radius: 230px / 110px;
    top: 23px;
}

.drw-hd-lt, .drw-hd-rt {
    position: absolute;
    width: 0;
    height: 0;
    top:2px;
    border-bottom: 28px solid #111;
}

.drw-hd-lt {
    left:129px;
    border-right: 14px solid transparent;
    border-left: 1px solid transparent;
}

.drw-hd-rt {
    right:131px;
    border-left: 14px solid transparent;
    border-right: 1px solid transparent;
}
/*画完了，帅的一逼！！！*/
    `
    let n = 0
    let timer = setTimeout(function fn() {
        n += 1
        pre.innerHTML = cssCode.substring(0, n)
        css.innerText = cssCode.substring(0, n)
        code.scrollTop = code.scrollHeight
        if (n < cssCode.length) {
            setTimeout(fn, speed)
        } else {
            clearTimeout(timer)
        }
    }, speed)

    slow.onclick = function () {
        speed = 50
    }
    normal.onclick = function () {
        speed = 30
    }
    fast.onclick = function () {
        speed = 10
    }
}.call()