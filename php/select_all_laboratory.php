<?php

require("init.php");

$select_all_lab_sql = "select * from lab_info";
$result = mysqli_query($conn, $select_all_lab_sql);
$lab_infos = mysqli_fetch_all($result, MYSQLI_ASSOC);

$array = array();
foreach ($lab_infos as $key => $value) {
    $array[$key] = $value;
}

echo (json_encode($array));

mysqli_close($conn);


