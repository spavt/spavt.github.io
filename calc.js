window.onload = function () {
    //事件驱动，点击按钮时触发事件，获取数据
    //1.获取用户输入的两个值
    var v1 = document.querySelector(".v1");
    var v2 = document.querySelector(".v2");

    //2.获取按钮
    //加法
    var jiaBtn = document.getElementById("jia");//获取加法按钮

    var jianBtn = document.getElementById("jian");//获取减法按钮
    var chengBtn = document.getElementById("cheng");//获取乘法按钮
    var chuButton = document.getElementById("chu");//获取除法按钮
    var cleanc=document.querySelector(".cleanc");//获取清除按钮
    var res = document.querySelector(".res");//获取结果
    cleanc.onclick = function(){//点击清除按钮时触发事件
        document.getElementById("music1").play();//播放音乐
        v1.value="";
        v2.value="";
        res.innerHTML=0;   
    }

   
    jiaBtn.onclick = function () {//点击加法按钮时触发事件

        jianBtn.classList.remove("bgcurrent");//移除背景颜色
        chengBtn.classList.remove("bgcurrent");//移除背景颜色
        chuButton.classList.remove("bgcurrent");//移除背景颜色
        this.classList.add("bgcurrent");//添加背景颜色

        document.getElementById("music1").play();//播放音乐

        if (!isNumString(v1.value) || !isNumString(v2.value)) {
            return;
        }


        var v3 = parseFloat(v1.value) + parseFloat(v2.value);//获取两个值并相加
        var res = document.querySelector(".res");//获取结果
        res.innerHTML = v3;

    }
    //减法

    jianBtn.onclick = function () {
        jiaBtn.classList.remove("bgcurrent");//移除背景颜色
        chengBtn.classList.remove("bgcurrent");//移除背景颜色
        chuButton.classList.remove("bgcurrent");//移除背景颜色
        this.classList.add("bgcurrent");//添加背景颜色

        document.getElementById("music1").play();//播放音乐
        
        //判断是否为数字，用CharAt()函数遍历字符串，并判断是否为空
        if (!isNumString(v1.value) || !isNumString(v2.value)) {
            return;
        }
        var v3 = parseFloat(v1.value) - parseFloat(v2.value);
        var res = document.querySelector(".res");
        res.innerHTML = v3;

    }
    //乘法

    chengBtn.onclick = function () {

        jiaBtn.classList.remove("bgcurrent");//移除背景颜色
        jianBtn.classList.remove("bgcurrent");//移除背景颜色
        chuButton.classList.remove("bgcurrent");//移除背景颜色
        this.classList.add("bgcurrent");//添加背景颜色

        document.getElementById("music1").play();//播放音乐

        //判断是否为数字，用CharAt()函数遍历字符串，并判断是否为空
        if (!isNumString(v1.value) || !isNumString(v2.value)) {
            return;
        }
        var v3 = parseFloat(v1.value) * parseFloat(v2.value);
        var res = document.querySelector(".res");
        res.innerHTML = v3;

    }
    //除法

    chuButton.onclick = function () {

        jiaBtn.classList.remove("bgcurrent");//移除背景颜色
        jianBtn.classList.remove("bgcurrent");//移除背景颜色
        chengBtn.classList.remove("bgcurrent");//移除背景颜色
        this.classList.add("bgcurrent");//添加背景颜色

        document.getElementById("music1").play();//播放音乐
        //判断是否为数字，用CharAt()函数遍历字符串，并判断是否为空
        if (!isNumString(v1.value) || !isNumString(v2.value)) {
            return;
        }

        if (v2.value == 0) {
            alert("除数不能为0");
            return;
        }
        var v3 = parseFloat(v1.value) / parseFloat(v2.value);
        var res = document.querySelector(".res");
        res.innerHTML = v3;


    }
    function isNumString(str) {
        if (v1.value == "" || v2.value == "") {
            alert("不能为空");
            return false;
        }
        for (var i = 0; i < str.length; i++) {//判断值1是否为数字，用CharAt()函数遍历字符串，并判断是否为空

            if (str.charAt(0) == '.') {
                alert("请输入正确的数字");
                return false;
            }
            if (str.charAt(i) != '.') {
                if (str.charAt(i) < '0' || str.charAt(i) > '9') {
                    alert("请输入正确的数字");
                    return false;
                }
            }
        }
        return true;
    }

}
