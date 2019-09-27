
 function LoginButton () {
    if (checkUname()&&checkPwd()&&checkAgainPwd()&&checkAge()&&checkEmail()&&checkname()&&checkPhone()){
      location.href = "https://lemonman.top/myHTML/LoveChina/LoveChina.html";
    }else{
        alert("请完善信息再重试!")
    }
}
function displayLogin() {
    var text = document.getElementById("login");
    text.style.opacity =  0.6;
}
function showLogin() {
    var text = document.getElementById("login");
    text.style.opacity =  1;
}
function checkUname() {
    var user = document.getElementById("user-name");
    var uname = user.value;
    if (uname == null || uname == ""){
        document.getElementById("user-name-erro").innerText = "用户名不能为空！";
        return false;
    }else{
        var reg = /^\w{6,20}$/;
        if (!reg.test(uname)) {
            document.getElementById("user-name-erro").innerText = "6-16位由数字、字母、下划线组成的名字！";
            return false;
        }else {
            document.getElementById("user-name-erro").innerText="";
            return true;
        }
    }

}

function checkPwd() {
    var pwd = document.getElementById("password");
    var pwdv = pwd.value;
    if (pwdv == null || pwdv == ""){
        document.getElementById("password-erro").innerText = "密码不能为空！";
        return false;
    }else{
        var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        console.log(reg.test(pwdv));
        if (reg.test(pwdv)) {

            document.getElementById("password-erro").innerText="";
            return true;
        }else {
            document.getElementById("password-erro").innerHTML = "最少6位，包括至少1个大写字母，<br/>1个小写字母，1个数字，1个特殊字符";
            return false;
        }
    }
}

function checkAgainPwd(){
    var pwd1 = document.getElementById("password").value;
    var pwd2 = document.getElementById("againpassword").value;
    if (pwd2 == null || pwd2 == ""){
        document.getElementById("againpassword-erro").innerText = "确认密码不能为空";
        return false;
    }else{
        if (pwd1 == pwd2) {
            document.getElementById("againpassword-erro").innerText = "";
            return true;
        }else {
            document.getElementById("againpassword-erro").innerText = "两次密码输入不一致！";
            return false;
        }
    }
}

function checkname(){
    var name = document.getElementById("name");

    if (name.value == null || name.value == ""){
        document.getElementById("name-erro").innerText = "昵称不能为空！";
        return false;
    }else{
        var reg = /^[\u4E00-\u9FA5]{2,6}$/;
        if (reg.test(name.value)) {
            document.getElementById("name-erro").innerText = "";
            return true;
        }else {
            document.getElementById("name-erro").innerText = "昵称请使用2-6个汉字！";
            return false;
        }
    }
}

function checkAge(){
    var age = document.getElementById("age");

    if (age.value == null || age.value == ""){
        document.getElementById("age-erro").innerText = "年龄不能为空！";
        return false;
    }else{
        var reg = /^([1-9])|([1-9][0-9])|(1[0-5][0-9])$/;
        if (reg.test(age.value)) {
            document.getElementById("age-erro").innerText = "";
            return true;
        }else {
            document.getElementById("age-erro").innerText = "年龄不合法，需要在1-150之间!";
            return false;
        }
    }
}

function checkPhone(){
    var telenumber = document.getElementById("telenumber");

    if (telenumber.value == null || telenumber.value == ""){
        document.getElementById("telenumber-erro").innerText = "电话不能为空！";
        return false;
    }else{
        var reg = /^1[3456789]\d{9}$/;
        if (reg.test(telenumber.value)) {
            document.getElementById("telenumber-erro").innerText = "";
            return true;
        }else {
            document.getElementById("telenumber-erro").innerText = "手机号码不合法！";
            return false;
        }
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    if (email == null || email == "") {
        document.getElementById("email-erro").innerText="邮箱不能为空！";
        return false;
    }else{
        var reg = /^\w{2,9}\@\w{2,11}\.\w{2,5}(\.\w{2,5})?$/;
        if (reg.test(email)){
            document.getElementById("email-erro").innerText="";
            return true;
        }else{
            document.getElementById("email-erro").innerText="邮箱不合法！";
            return false;
        }
    }
}

 function selectAll ()  {
        var all = document.getElementById("all").checked;  //true,false;
        var hobbies = document.getElementsByName("hobbies");
        for (var i = 0; i < hobbies.length; i++) {
            hobbies[i].checked = all;  // 后面的跟全选一致！         }
        }
    }

