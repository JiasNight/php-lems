<?php
//session_start();
require("init.php");

@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upasswd"];
@$uposition = $_REQUEST["uposition"];

// $uname = "root";
// $upwd = "root";
// $uposition = "1";
// setcookie("user_name",$uname,time()+3600);
$sql = "select * from users_info where uname='$uname' and upasswd='$upwd' and uposition='$uposition'";
$result = mysqli_query($conn, $sql);
//var_dump($result);
$row_arr = mysqli_fetch_all($result, MYSQLI_BOTH);

if ($row_arr) {
    //如果登录成功，生成对应的会话值。
    //$_SESSION['logined'] = 1;   //判断是否已经登录的依据。
    // $_SESSION['uname'] = $uname;  //记录当前登录用户。

    //echo "<script>alert('登陆成功!')</script>";
    if ($uposition == "1") {
        require("../back_stage.html");
        //header("Location:../back_stage.html");
    } else if ($uposition == "2") {
        require("../back_stage_lab.html");
    } else if ($uposition == "3") {
        require("../back_stage_store.html");
    } else {
        require("../back_stage_mai.html");
    }
} else {
    //echo "<script>alert('用户名或密码错误！');</script>";
    //require("../index.html");
    header("Location:../index.html");
}

// echo $_SESSION["uname"];
mysqli_close($conn);

