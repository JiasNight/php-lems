<?php

require("init.php");

$select_apply_aduit_sql = "select aid,anumber,aname,aprice,abuynum,adate,awho,astatus from apply_info";
//echo $select_apply_aduit_sql;
$result = mysqli_query($conn, $select_apply_aduit_sql);

$apply_arr = mysqli_fetch_all($result, MYSQLI_ASSOC);

$array = array();
foreach ($apply_arr as $key => $value) {
    $array[$key] = $value;
}

//echo count($array);
echo (json_encode($array));

mysqli_close($conn);