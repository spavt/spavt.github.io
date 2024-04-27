window.onload=function(){
    var login = document.getElementById("login");
    login.onclick=function(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if(username=="admin" && password=="xu337799000"){
            alert("Login Success");
            window.location.href = "https://mailh.qiye.163.com";
            document.getElementById("iptjs-valuejs-pwd").value = "test"; document.getElementById("iptjs-valuejs-pwd").value = "test";

        }else{
            alert("Login Failed");
        }
    }

}