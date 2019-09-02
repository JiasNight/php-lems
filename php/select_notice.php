<?php
require("init.php");

$select_sql = "select * from notice_info order by nid desc";
$result = mysqli_query($conn, $select_sql);
$infos = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo (json_encode($infos));
mysqli_close($conn);