<?php

require("init.php");
@$unumber = $_GET["unumber"];
@$uname = $_GET["uname"];
@$upwd = $_GET["upasswd"];

// $unumber = "vgdaf";
// $uname = "43444";
// $upwd = "15111s";

$insert_maintenance_sql = "insert into users_info(unumber,uname,upasswd,uposition,ustatus) values('$unumber','$uname','$upwd','4',1)";
//echo $insert_maintenance_sql;
$result1 = mysqli_query($conn, $insert_maintenance_sql);

if ($result1) {
    $select_maintenance_sql = "select unumber,uname,upasswd,uposition from users_info where unumber='$unumber' and uname='$uname'";
    //echo $select_users_sql;
    $result2 = mysqli_query($conn, $select_maintenance_sql);
    $maintenance_info = mysqli_fetch_array($result2, MYSQLI_ASSOC);
    if ($maintenance_info['uposition'] == '4') {
        $maintenance_info['uposition'] = "维修员";
    }
    $maint_arr = array();
    foreach ($maintenance_info as $key => $value) {
        //把键值取出放到result数组的data下
        $maint_arr[$key] = $value;
    }
    echo (json_encode($maint_arr));
} else {
    echo "no_add";
}

mysqli_close($conn);
