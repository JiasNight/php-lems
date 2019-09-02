<?php
require("init.php");

@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upasswd"];
@$uposition = $_REQUEST["uposition"];

$sql = "select * from users_info where uname='$uname' and upasswd='$upwd' and uposition='$uposition'";
$result = mysqli_query($conn, $sql);
$row_arr = mysqli_fetch_all($result, MYSQLI_BOTH);

if (!$row_arr) {
    echo "no";
}

mysqli_close($conn);
