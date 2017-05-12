/**
 * Created by Administrator on 2017-05-12 012.
 */
window.onload = function () {
    var oSp1 = document.getElementById('sp1');
    var oSp2 = document.getElementById('sp2');
    $("#tet").blur(function(){
        var text = document.getElementById('tet').value;
        var patt = /1[3,5,7,8][0-9]{9}/;
        if ( (patt.test(text) == false) ) {
            oSp1.innerHTML = "用户账号非法";
            oSp1.style.color = "red";
        } else {
            oSp1.innerHTML = "";
            oSp1.style.color = "";
        }
    });
    $('#paw').blur(function () {
        var paw = document.getElementById('paw').value;
        var patt1 = /^[a-z,A-Z,0-9]{8,10}$/;
        if ( (patt1.test(paw) == false) ) {
            oSp2.innerHTML = "密码必须为8-10位数字，字母组合";
            oSp2.style.color = "red";
        } else {
            oSp2.innerHTML = "";
            oSp2.style.color = "";
        }
    });
    $('#btn2').on('click',function(){
        $("#box").load('02.html');
    });
}