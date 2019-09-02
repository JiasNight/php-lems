<?php
require("init.php");

$select_all_sql = "select * from repair_info";
$result = mysqli_query($conn, $select_all_sql);
$all_infos = mysqli_fetch_all($result, MYSQLI_ASSOC);

// $array = array();
// foreach ($all_infos as $key => $value) {
//     $array[$key] = $value;
// }
echo (json_encode($all_infos));

mysqli_close($conn);