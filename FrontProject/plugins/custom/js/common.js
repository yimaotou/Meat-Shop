
function checkMail(name) {
    var email = document.getElementById(name).value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if(atpos < 1 || dotpos <atpos + 2 || dotpos + 2 >= email.length){
        document.getElementById(name).className = "invalidBorder";
        document.getElementById("tip_"+name).innerHTML = "非法邮箱地址";
        return false;
    }else {
        document.getElementById(name).className = "normalBorder";
        document.getElementById("tip_" + name).innerHTML = "";
        return true;
    }
}

function checkRepwd(pwd,repwd) {
    if(checkName(pwd) == false)
        return false;
    if(document.getElementById(pwd).value!= document.getElementById(repwd).value){
        document.getElementById(repwd).className = "invalidBorder";
        document.getElementById("tip_"+repwd).innerHTML = "两次输入密码必须相同";
        return false;
    }else {
        document.getElementById(repwd).className = "normalBorder";
        document.getElementById("tip_" + repwd).innerHTML = "";
        return true;
    }
}
function checkName(name) {
    var username = document.getElementById(name);
    if(username.value == null || username.value == "" || username.value.length < 8){
        document.getElementById(name).className = "invalidBorder";
        if(username.value == null || username.value == ""){
            document.getElementById("tip_"+name).innerHTML = "不能为空";
        }else {
            document.getElementById("tip_"+name).innerHTML = "不能少于8位";
        }
        return false;
    }else {
        document.getElementById(name).className = "normalBorder";
        document.getElementById("tip_" + name).innerHTML = "";
        return true;
    }

}
function validationForm() {

    if(checkMail("email") == true){
        if(checkName("username")&&checkName("password")&&checkRepwd("password","repwd")){
            return true;
        }
    }
    return false;
}
