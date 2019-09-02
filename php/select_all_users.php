<?php
require("init.php");

$sql = "select uid,unumber,uname,upasswd,uposition from users_info where ustatus=1";
$result = mysqli_query($conn, $sql);
$users_all = mysqli_fetch_all($result, MYSQLI_ASSOC);

$array = array();
foreach ($users_all as $key => $value) {
    $array[$key] = $value;
}

//echo count($array);
echo (json_encode($array));

mysqli_close($conn);