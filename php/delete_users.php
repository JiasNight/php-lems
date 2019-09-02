<?php
require("init.php");

@$uid = $_GET["uid"];
// $uid = 2;
//echo $uid;
$delete_users_sql = "update users_info set ustatus=0 where uid='$uid'";
//echo $delete_users_sql;
$result = mysqli_query($conn, $delete_users_sql);
if ($result) {
    echo "yes";
} else {
    echo "no";
}

mysqli_close($conn);
