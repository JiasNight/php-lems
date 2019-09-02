<?php

require("init.php");

$select_all_equip_sql = "select * from equip_info";
$result = mysqli_query($conn, $select_all_equip_sql);
$equip_infos = mysqli_fetch_all($result, MYSQLI_ASSOC);

$array = array();
foreach ($equip_infos as $key => $value) {
    $array[$key] = $value;
}

echo (json_encode($array));

mysqli_close($conn);
