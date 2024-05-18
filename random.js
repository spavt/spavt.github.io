window.onload = function() {
    //模拟数据库
    let data = ["张三","李四","王五","赵六","孙七","周八","吴九",
    "郑十","钱十一","马十二","陈十三","杨十四","黄十五","胡十六","林十七",
    "周十八","张十九","李二十","王二十一","赵二十二","孙二十三","周二十四"]

    //获取按钮
    let btn = document.querySelector(".btn");
    let namecolor=document.getElementById("name");
    btn.onclick = function() {
        //获取随机数
        let index= Math.floor(Math.random()*data.length);
        //获取随机数对应的数据
        let name = data[index];
        //将数据显示到页面
        let show = document.querySelector("p");
        show.innerHTML = "点到的是："+name;
        namecolor.style.color = "red";

}
//加定时器
    var flag=true;
    var t
    let btn1 = document.querySelector(".btn1");
    btn1.onclick = function() {
        if(flag)
            {
                t=setInterval(function(){
                    let index= Math.floor(Math.random()*data.length);
                    let name = data[index];
                    let show = document.querySelector("p");
                    show.innerHTML = "点到的是："+name;
                    namecolor.style.color = "red";
        
                },100);
                //将按钮的文字改为停止
                btn1.innerHTML = "停止";
                flag=false;
            }
            else{//清除定时器
                btn1.innerHTML = "开始点名";                
                clearInterval(t);
                flag=true;
            }



    }


}