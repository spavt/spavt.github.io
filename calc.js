window.onload=function() {
    var v1 = document.querySelector(".v1");//获取输入框1
    var v2 = document.querySelector(".v2");//获取输入框2
    var operator = document.getElementById("operator");//获取运算符
    var result = document.querySelector(".result");//获取结果
    var btn = document.querySelector(".btn");//获取计算按钮
    var clear = document.querySelector(".clearn");//获取清空按钮

    //用户点击计算按钮
    btn.onclick = function() {
        this.classList.add("cur");

        var num1 = parseFloat(v1.value);
        var num2 = parseFloat(v2.value);

        var op = operator.value;
        if (!isLegal(v1.value) || !isLegal(v2.value)) {
            return; // 如果输入不合法，直接返回
        }
        if (op == "+") {
            result.innerHTML= num1 + num2;
        } else if (op == "-") {
            result.innerHTML = num1 - num2;
        } else if (op == "*") {
            result.innerHTML = num1 * num2;
        } else if (op == "/") {
            // 判断除数是否为0
            if(num2==0){
                alert("除数不能为0");
                return ;
            }
            result.innerHTML = num1 / num2;

        }
    }
    function isLegal(str){
        if(str==""){
            alert("不能为空");
            return false;
        }
        // 使用ASCII码判断输入是否为数字,在0-9之间
        var count=0;
        for(var i=0;i<str.length;i++){
            //判断是否有‘.’
            if(str.charAt(i)=='.'){
                if(i==0||i==str.length-1){
                    alert("'.'不能在首尾");
                    return false;
                }

                    else    
                    count++;

                if(count>1){
                    alert("只能有一个'.'");
                    return false;
                }
            }
            if((str.charAt(i)!='.')&&(str.charAt(i)<'0'||str.charAt(i)>'9')){
                alert("请输入合法的数字");
                return false;
            }
        }
        return true;
    }
    clear.onclick = function() {
        v1.value = "";
        v2.value = "";
        operator.value = '+';
        result.innerHTML = '0';
        btn.classList.remove("cur");
    }

}