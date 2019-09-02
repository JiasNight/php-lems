<?php

require("init.php");

$select_all_lab_sql = "select lname from lab_info";
$result = mysqli_query($conn, $select_all_lab_sql);
$lab_infos = mysqli_fetch_all($result, MYSQLI_ASSOC);

$arr_num = array();
foreach ($lab_infos as $key => $value) {
    foreach($value as $k => $v){
        $sql = "SELECT lnumber,lname from lab_info,equip_info WHERE lab_info.lname=equip_info.eclassroom AND lname='$v'";
        $result = mysqli_query($conn, $sql);
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $arr_num[$key] = count($rows);
    }
    
}

//print_r($arr_num);
echo (json_encode($arr_num));


mysqli_close($conn);

