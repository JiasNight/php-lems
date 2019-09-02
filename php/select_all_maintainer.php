<?php
require("init.php");
$select_all_aql = "select * from mainworker_info";
$result = mysqli_query($conn, $select_all_aql);
$mainworker_infos = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo (json_encode($mainworker_infos));

mysqli_close($conn);
