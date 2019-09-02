<?php

require("init.php");
@$unumber = $_GET["unumber"];
@$uname = $_GET["uname"];
@$upwd = $_GET["upasswd"];
@$uposition = $_GET["uposition"];

// $unumber = "77";
// $uname = "777";
// $upwd = "7777";
// $uposition = "1";

$insert_users_sql = "insert into users_info(unumber,uname,upasswd,uposition,ustatus) values('$unumber','$uname','$upwd','$uposition',1)";
//echo $insert_users_sql;
$result1 = mysqli_query($conn, $insert_users_sql);

if ($result1) {
    // echo "ok";
    // header("Loacation:../back_store.html");
    $select_users_sql = "select unumber,uname,upasswd,uposition from users_info where unumber='$unumber' and uname='$uname'";
    //echo $select_users_sql;
    $result2 = mysqli_query($conn, $select_users_sql);
    //echo $result2;
    //$users_info_arr = mysqli_fetch_array($result2, MYSQLI_ASSOC);
    $users_info_arr = mysqli_fetch_array($result2, MYSQLI_ASSOC);
    if ($users_info_arr['uposition'] == '1') {
        $users_info_arr['uposition'] = "系统管理员";
    } else if ($users_info_arr['uposition'] == '2') {
        $users_info_arr['uposition'] = "设备管理员";
    } else if ($users_info_arr['uposition'] == '3') {
        $users_info_arr['uposition'] = "仓库管理员";
    } else {
        $users_info_arr['uposition'] = "维修员";
    }
    $arr = array();
    foreach ($users_info_arr as $key => $value) {
        $arr[$key] = $value;
    }
    echo (json_encode($arr));
} else {
    echo "no_add";
}

mysqli_close($conn);
