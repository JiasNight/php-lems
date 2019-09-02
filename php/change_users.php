<?php

require("init.php");
@$upasswd = $_GET["upasswd"];
@$uposition = $_GET["uposition"];
@$uid = $_GET["uid"];
// $upasswd = "666666";
// $uposition = "2";
// $uid = "4";
$change_info_sql = "update users_info set upasswd='$upasswd',uposition='$uposition' where uid='$uid'";
//echo $change_info_sql;
$result = mysqli_query($conn, $change_info_sql);
if ($result) {
    echo "yes";
}else{ 
    echo "no";
}
//echo $result;

mysqli_close($conn);
