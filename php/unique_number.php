<?php

require("init.php");
@$unumber = $_GET['unumber'];
// @$unumber = 567;
//echo $unumber;
$sql = "select unumber from users_info where unumber='$unumber'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);
if ($row) {
    echo "yes";//返回no说明number有相同
} else { 
    echo "no";//返回yes说明number没有相同
}
mysqli_close($conn);
